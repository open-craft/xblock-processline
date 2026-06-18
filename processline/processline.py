"""
An XBlock for creating a process line illustration.
"""

from __future__ import annotations

import copy
import re
from typing import Any

from django.utils import translation
from web_fragments.fragment import Fragment
from xblock.core import XBlock
from xblock.fields import Dict, List, Scope, String

try:
    import importlib_resources
except ImportError:  # pragma: no cover
    from importlib import resources as importlib_resources

DEFAULT_INTRODUCTION_TEXT = (
    "Click and drag to explore. Select an item for more details."
)
DEFAULT_STYLING = {
    "lineItemTitleColor": "#001731",
    "lineItemTitleFontSize": 18,
    "lineItemLabelColor": "#001731",
    "lineItemLabelFontSize": 16,
    "highlightColor": "#0070F0",
    "cardBackgroundColor": "#001731",
    "cardTitleColor": "#FFFFFF",
    "cardTitleFontSize": 22,
    "cardDescriptionColor": "#FFFFFF",
    "cardDescriptionFontSize": 16,
}
DEFAULT_ITEMS = [
    {
        "title": "Step 1",
        "label": "Start here",
        "description": "Describe the first step in the process.",
        "displayAboveLine": True,
        "position": 0.0,
    },
    {
        "title": "Step 2",
        "label": "Keep going",
        "description": "Describe the second step in the process.",
        "displayAboveLine": False,
        "position": 0.5,
    },
    {
        "title": "Step 3",
        "label": "Finish",
        "description": "Describe the final step in the process.",
        "displayAboveLine": True,
        "position": 1.0,
    },
]
HEX_COLOR_RE = re.compile(r"^#(?:[0-9a-fA-F]{3}|[0-9a-fA-F]{6})$")


class ProcesslineXBlock(XBlock):
    """
    Process Line XBlock.
    """

    display_name = String(
        default=translation.gettext_noop("Process Line"), scope=Scope.settings
    )
    introduction_text = String(default=DEFAULT_INTRODUCTION_TEXT, scope=Scope.settings)
    styling = Dict(default=copy.deepcopy(DEFAULT_STYLING), scope=Scope.settings)
    items = List(default=copy.deepcopy(DEFAULT_ITEMS), scope=Scope.settings)

    def resource_string(self, path):
        """Handy helper for getting resources from our kit."""
        data = importlib_resources.files("processline").joinpath(path).read_text("utf8")
        return data

    def _public_url(self, path: str) -> str:
        """Return a runtime-served URL for a public asset."""
        return self.runtime.local_resource_url(self, path)

    @staticmethod
    def _normalize_color(value: Any, fallback: str) -> str:
        value = str(value or "").strip()
        return value if HEX_COLOR_RE.match(value) else fallback

    @staticmethod
    def _normalize_font_size(value: Any, fallback: int) -> int:
        try:
            normalized = int(str(value).replace("px", "").strip())
        except (TypeError, ValueError, AttributeError):
            return fallback
        return normalized if normalized > 0 else fallback

    @classmethod
    def _normalize_styling(cls, styling: Any) -> dict[str, Any]:
        styling = styling or {}
        return {
            "lineItemTitleColor": cls._normalize_color(
                styling.get("lineItemTitleColor"), DEFAULT_STYLING["lineItemTitleColor"]
            ),
            "lineItemTitleFontSize": cls._normalize_font_size(
                styling.get("lineItemTitleFontSize"),
                DEFAULT_STYLING["lineItemTitleFontSize"],
            ),
            "lineItemLabelColor": cls._normalize_color(
                styling.get("lineItemLabelColor"), DEFAULT_STYLING["lineItemLabelColor"]
            ),
            "lineItemLabelFontSize": cls._normalize_font_size(
                styling.get("lineItemLabelFontSize"),
                DEFAULT_STYLING["lineItemLabelFontSize"],
            ),
            "highlightColor": cls._normalize_color(
                styling.get("highlightColor"), DEFAULT_STYLING["highlightColor"]
            ),
            "cardBackgroundColor": cls._normalize_color(
                styling.get("cardBackgroundColor"),
                DEFAULT_STYLING["cardBackgroundColor"],
            ),
            "cardTitleColor": cls._normalize_color(
                styling.get("cardTitleColor"), DEFAULT_STYLING["cardTitleColor"]
            ),
            "cardTitleFontSize": cls._normalize_font_size(
                styling.get("cardTitleFontSize"), DEFAULT_STYLING["cardTitleFontSize"]
            ),
            "cardDescriptionColor": cls._normalize_color(
                styling.get("cardDescriptionColor"),
                DEFAULT_STYLING["cardDescriptionColor"],
            ),
            "cardDescriptionFontSize": cls._normalize_font_size(
                styling.get("cardDescriptionFontSize"),
                DEFAULT_STYLING["cardDescriptionFontSize"],
            ),
        }

    @classmethod
    def _normalize_items(cls, items: Any) -> list[dict[str, Any]]:
        if not isinstance(items, list) or not items:
            raise ValueError("At least one line item is required.")

        normalized_items = []
        for index, item in enumerate(items):
            if not isinstance(item, dict):
                raise ValueError("Each line item must be an object.")
            title = str(item.get("title") or f"Step {index + 1}").strip()
            label = str(item.get("label") or "").strip()
            description = str(item.get("description") or "").strip()
            display_above_line = bool(item.get("displayAboveLine", index % 2 == 0))
            try:
                position = float(item.get("position", index))
            except (TypeError, ValueError):
                position = float(index)
            position = min(1.0, max(0.0, position))
            normalized_items.append(
                {
                    "title": title,
                    "label": label,
                    "description": description,
                    "displayAboveLine": display_above_line,
                    "position": position,
                }
            )

        normalized_items.sort(key=lambda current_item: current_item["position"])
        return normalized_items

    def _get_items(self) -> list[dict[str, Any]]:
        return self._normalize_items(copy.deepcopy(self.items))

    def _get_styling(self) -> dict[str, Any]:
        return self._normalize_styling(copy.deepcopy(self.styling))

    def _initialization_data(self) -> dict[str, Any]:
        return {
            "displayName": self.display_name,
            "introductionText": self.introduction_text,
            "styling": self._get_styling(),
            "items": self._get_items(),
        }

    def student_view(self, context=None):  # pylint: disable=unused-argument
        """
        Create primary view of the ProcesslineXBlock, shown to students when viewing courses.
        """
        frag = Fragment(self.resource_string("static/html/processline_student.html"))
        frag.add_javascript(self.resource_string("static/student.js"))
        frag.add_css_url(self._public_url("public/student-ui.css"))
        data = self._initialization_data()
        data["url"] = self._public_url("public/student-ui.js")
        frag.initialize_js("ProcesslineBlock", data)
        return frag

    @XBlock.json_handler
    def studio_save(self, data, suffix=""):  # pylint: disable=unused-argument
        """Save config and data based on data received at this API endpoint."""
        try:
            self.display_name = (
                str(data.get("displayName") or "Process Line Title").strip()
                or "Process Line Title"
            )
            self.introduction_text = str(data.get("introductionText") or "").strip()
            self.styling = self._normalize_styling(data.get("styling"))
            self.items = self._normalize_items(data.get("items"))
            self.save()
        except ValueError as error:
            return {"result": "error", "message": str(error)}

        return {"result": "success", "configuration": self._initialization_data()}

    def studio_view(self, context=None):  # pylint: disable=unused-argument
        """
        Create primary view of the ProcesslineXBlock, shown to course authors in Studio.
        """
        frag = Fragment(self.resource_string("static/html/processline.html"))
        frag.add_javascript(self.resource_string("static/studio.js"))
        frag.add_css_url(self._public_url("public/studio-ui.css"))
        data = self._initialization_data()
        data["url"] = self._public_url("public/studio-ui.js")
        frag.initialize_js("ProcesslineEditor", data)
        return frag

    @staticmethod
    def workbench_scenarios():  # pragma: no cover
        """Create canned scenario for display in the workbench."""
        return [
            (
                "ProcesslineXBlock",
                """<processline/>
             """,
            ),
            (
                "Multiple ProcesslineXBlock",
                """<vertical_demo>
                <processline/>
                <processline/>
                <processline/>
                </vertical_demo>
             """,
            ),
        ]
