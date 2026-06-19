"""Pydantic models for Process Line configuration."""

from __future__ import annotations

import re
from typing import Any

from pydantic import BaseModel, ConfigDict, Field, ValidationInfo, field_validator, model_validator

DEFAULT_DISPLAY_NAME = "Process Line"
DEFAULT_INTRODUCTION_TEXT = "Click and drag to explore. Select an item for more details."

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


def normalize_color(value: Any, fallback: str) -> str:
    """Normalize a color value using the existing fallback behavior."""
    value = str(value or "").strip()
    return value if HEX_COLOR_RE.match(value) else fallback


def normalize_font_size(value: Any, fallback: int) -> int:
    """Normalize a font size using the existing fallback behavior."""
    try:
        normalized = int(str(value).replace("px", "").strip())
    except (TypeError, ValueError, AttributeError):
        return fallback
    return normalized if normalized > 0 else fallback


def normalize_position(value: Any, fallback: float) -> float:
    """Clamp a position into the supported 0..1 range."""
    try:
        normalized = float(value)
    except (TypeError, ValueError):
        normalized = fallback
    return min(1.0, max(0.0, normalized))


class ProcessLineItem(BaseModel):
    """One item on the process line."""

    model_config = ConfigDict(extra="ignore")

    title: str = ""
    label: str = ""
    description: str = ""
    displayAboveLine: bool = False
    position: float = 0.0

    @field_validator("title", "label", "description", mode="before")
    @classmethod
    def normalize_text(cls, value: Any) -> str:
        """Coerce text-like fields to stripped strings."""
        return str(value or "").strip()

    @field_validator("displayAboveLine", mode="before")
    @classmethod
    def normalize_display_above_line(cls, value: Any) -> bool:
        """Coerce truthy/falsy values to bool."""
        return bool(value)

    @field_validator("position", mode="before")
    @classmethod
    def clamp_position(cls, value: Any) -> float:
        """Clamp item position before model validation."""
        return normalize_position(value, 0.0)


class ProcessLineStyling(BaseModel):
    """Styling configuration for the process line."""

    model_config = ConfigDict(extra="ignore")

    lineItemTitleColor: str = DEFAULT_STYLING["lineItemTitleColor"]
    lineItemTitleFontSize: int = DEFAULT_STYLING["lineItemTitleFontSize"]
    lineItemLabelColor: str = DEFAULT_STYLING["lineItemLabelColor"]
    lineItemLabelFontSize: int = DEFAULT_STYLING["lineItemLabelFontSize"]
    highlightColor: str = DEFAULT_STYLING["highlightColor"]
    cardBackgroundColor: str = DEFAULT_STYLING["cardBackgroundColor"]
    cardTitleColor: str = DEFAULT_STYLING["cardTitleColor"]
    cardTitleFontSize: int = DEFAULT_STYLING["cardTitleFontSize"]
    cardDescriptionColor: str = DEFAULT_STYLING["cardDescriptionColor"]
    cardDescriptionFontSize: int = DEFAULT_STYLING["cardDescriptionFontSize"]

    @field_validator(
        "lineItemTitleColor",
        "lineItemLabelColor",
        "highlightColor",
        "cardBackgroundColor",
        "cardTitleColor",
        "cardDescriptionColor",
        mode="before",
    )
    @classmethod
    def validate_color(cls, value: Any, info: ValidationInfo) -> str:
        """Apply the current fallback-based color normalization."""
        fallback = DEFAULT_STYLING[info.field_name]
        return normalize_color(value, fallback)

    @field_validator(
        "lineItemTitleFontSize",
        "lineItemLabelFontSize",
        "cardTitleFontSize",
        "cardDescriptionFontSize",
        mode="before",
    )
    @classmethod
    def validate_font_size(cls, value: Any, info: ValidationInfo) -> int:
        """Apply the current fallback-based font normalization."""
        fallback = DEFAULT_STYLING[info.field_name]
        return normalize_font_size(value, fallback)


class ProcessLineConfiguration(BaseModel):
    """Top-level process line configuration payload."""

    model_config = ConfigDict(extra="ignore")

    displayName: str = DEFAULT_DISPLAY_NAME
    introductionText: str = DEFAULT_INTRODUCTION_TEXT
    styling: ProcessLineStyling = Field(default_factory=ProcessLineStyling)
    items: list[ProcessLineItem] = Field(default_factory=list)

    @field_validator("displayName", mode="before")
    @classmethod
    def validate_display_name(cls, value: Any) -> str:
        """Normalize display name using the current save behavior."""
        normalized = str(value or "").strip()
        return normalized or DEFAULT_DISPLAY_NAME

    @field_validator("introductionText", mode="before")
    @classmethod
    def validate_introduction_text(cls, value: Any) -> str:
        """Coerce introduction text to a stripped string."""
        return str(value or "").strip()

    @field_validator("styling", mode="before")
    @classmethod
    def validate_styling(cls, value: Any) -> dict[str, Any]:
        """Treat null styling payloads as empty objects."""
        return value or {}

    @field_validator("items", mode="before")
    @classmethod
    def validate_items(cls, value: Any) -> list[dict[str, Any]]:
        """Normalize the item list before item model validation."""
        if not isinstance(value, list) or not value:
            raise ValueError("At least one line item is required.")

        normalized_items: list[dict[str, Any]] = []
        for index, item in enumerate(value):
            if not isinstance(item, dict):
                raise ValueError("Each line item must be an object.")

            normalized_items.append(
                {
                    "title": item.get("title") or f"Step {index + 1}",
                    "label": item.get("label") or "",
                    "description": item.get("description") or "",
                    "displayAboveLine": item.get("displayAboveLine", index % 2 == 0),
                    "position": item.get("position", index),
                }
            )

        return normalized_items

    @model_validator(mode="after")
    def sort_items(self) -> "ProcessLineConfiguration":
        """Sort items by position to match the persisted backend shape."""
        self.items = sorted(self.items, key=lambda item: item.position)
        return self
