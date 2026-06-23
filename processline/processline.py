"""
An XBlock for creating a process line illustration.
"""

from __future__ import annotations

import copy

from django.utils import translation
from pydantic import ValidationError
from web_fragments.fragment import Fragment
from xblock.core import XBlock
from xblock.fields import Dict, List, Scope, String

from .types import DEFAULT_INTRODUCTION_TEXT, DEFAULT_ITEMS, DEFAULT_STYLING, ProcessLineConfiguration

try:
    import importlib_resources
except ImportError:  # pragma: no cover
    from importlib import resources as importlib_resources


class ProcesslineXBlock(XBlock):
    """
    Process Line XBlock.
    """

    display_name = String(default=translation.gettext_noop("Process Line"), scope=Scope.settings)
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
    def _format_validation_error(error: ValidationError) -> str:
        """Return concise validation messages for Studio/API responses."""
        messages = []
        for validation_error in error.errors():
            source_error = validation_error.get("ctx", {}).get("error")
            messages.append(str(source_error or validation_error["msg"]))
        return "; ".join(messages)

    def _configuration_model(self) -> ProcessLineConfiguration:
        """Validate persisted field data with the shared configuration schema."""
        return ProcessLineConfiguration.model_validate(
            {
                "displayName": self.display_name,
                "introductionText": self.introduction_text,
                "styling": copy.deepcopy(self.styling),
                "items": copy.deepcopy(self.items),
            }
        )

    def _initialization_data(self) -> dict[str, object]:
        try:
            return self._configuration_model().model_dump()
        except (ValidationError, TypeError, ValueError):
            return ProcessLineConfiguration().model_dump()

    def student_view(self, context=None):
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
    def studio_save(self, data, suffix=""):
        """Save config and data based on data received at this API endpoint."""
        try:
            configuration = ProcessLineConfiguration.model_validate(data)
            self.display_name = configuration.displayName
            self.introduction_text = configuration.introductionText
            self.styling = configuration.styling.model_dump()
            self.items = [item.model_dump() for item in configuration.items]
            self.save()
        except ValidationError as error:
            return {"result": "error", "message": self._format_validation_error(error)}

        return {"result": "success", "configuration": self._initialization_data()}

    def studio_view(self, context=None):
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
