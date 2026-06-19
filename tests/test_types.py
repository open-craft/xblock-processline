"""Tests for Pydantic-backed Process Line schema models."""

from processline.types import (
    DEFAULT_DISPLAY_NAME,
    DEFAULT_STYLING,
    ProcessLineConfiguration,
    ProcessLineStyling,
)


def test_styling_model_normalizes_font_sizes_and_colors():
    """Styling model should preserve existing fallback behavior."""
    styling = ProcessLineStyling.model_validate(
        {
            "highlightColor": "#123456",
            "cardTitleFontSize": "28px",
            "cardBackgroundColor": "not-a-color",
        }
    )

    assert styling.highlightColor == "#123456"
    assert styling.cardTitleFontSize == 28
    assert styling.cardBackgroundColor == DEFAULT_STYLING["cardBackgroundColor"]


def test_configuration_model_requires_items_and_sorts_them():
    """Configuration model should reject empty lists and sort saved items."""
    config = ProcessLineConfiguration.model_validate(
        {
            "displayName": "  Updated Title  ",
            "items": [
                {"title": "Step 2", "position": 0.8},
                {"title": "Step 1", "position": 0.2},
            ],
        }
    )

    assert config.displayName == "Updated Title"
    assert [item.title for item in config.items] == ["Step 1", "Step 2"]


def test_configuration_model_applies_item_fallbacks():
    """Configuration model should keep index-based defaults from normalizers."""
    config = ProcessLineConfiguration.model_validate(
        {
            "displayName": "",
            "items": [
                {"position": -5},
                {"displayAboveLine": True, "position": 2},
            ],
        }
    )

    assert config.displayName == DEFAULT_DISPLAY_NAME
    assert config.items[0].title == "Step 1"
    assert config.items[0].displayAboveLine is True
    assert config.items[0].position == 0.0
    assert config.items[1].title == "Step 2"
    assert config.items[1].displayAboveLine is True
    assert config.items[1].position == 1.0
