"""
Tests for ProcesslineXBlock.
"""

import json

from webob import Request
from xblock.field_data import DictFieldData
from xblock.fields import ScopeIds
from xblock.test.toy_runtime import ToyRuntime

from processline.processline import ProcesslineXBlock
from processline.types import DEFAULT_STYLING


def make_block(field_data=None):
    """Create a ProcesslineXBlock for tests."""
    runtime = ToyRuntime()
    scope_ids = ScopeIds("user", "processline", "def", "usage")
    return ProcesslineXBlock(runtime, field_data or DictFieldData({}), scope_ids)


def post_json(handler, payload):
    """Call an XBlock JSON handler and decode the JSON response."""
    request = Request.blank(
        "/handler",
        method="POST",
        content_type="application/json",
        body=json.dumps(payload).encode("utf-8"),
    )
    response = handler(request)
    return json.loads(response.body.decode("utf-8"))


def test_studio_save_persists_normalized_configuration():
    """The save handler should persist normalized styling and sorted items."""
    block = make_block()

    response = post_json(
        block.studio_save,
        {
            "displayName": "Updated Title",
            "introductionText": "Updated intro",
            "styling": {
                "highlightColor": "#123456",
                "cardTitleFontSize": "28px",
            },
            "items": [
                {
                    "title": "Step 2",
                    "label": "Second",
                    "description": "Second description",
                    "displayAboveLine": False,
                    "position": 0.8,
                },
                {
                    "title": "Step 1",
                    "label": "First",
                    "description": "First description",
                    "displayAboveLine": True,
                    "position": 0.2,
                },
            ],
        },
    )

    assert response["result"] == "success"
    assert block.display_name == "Updated Title"
    assert block.introduction_text == "Updated intro"
    assert block.styling["highlightColor"] == "#123456"
    assert block.styling["cardTitleFontSize"] == 28
    assert [item["title"] for item in block.items] == ["Step 1", "Step 2"]


def test_studio_save_requires_at_least_one_item():
    """Saving with no line items should fail cleanly."""
    block = make_block()

    response = post_json(block.studio_save, {"items": []})

    assert response["result"] == "error"
    assert response["message"] == "At least one line item is required."


def test_initialization_data_normalizes_persisted_configuration():
    """Initialization payloads should use the shared Pydantic configuration model."""
    block = make_block(
        DictFieldData(
            {
                "display_name": "Legacy Title",
                "introduction_text": " Legacy intro ",
                "styling": {
                    "highlightColor": "invalid",
                    "cardTitleFontSize": "28px",
                },
                "items": [
                    {
                        "title": "Step 2",
                        "label": "Second",
                        "description": "Second description",
                        "displayAboveLine": False,
                        "position": 3,
                    },
                    {
                        "title": "Step 1",
                        "label": "First",
                        "description": "First description",
                        "displayAboveLine": True,
                        "position": -1,
                    },
                ],
            }
        )
    )

    configuration = block._initialization_data()

    assert configuration["displayName"] == "Legacy Title"
    assert configuration["introductionText"] == "Legacy intro"
    assert configuration["styling"]["highlightColor"] == DEFAULT_STYLING["highlightColor"]
    assert configuration["styling"]["cardTitleFontSize"] == 28
    assert [item["title"] for item in configuration["items"]] == ["Step 1", "Step 2"]
    assert [item["position"] for item in configuration["items"]] == [0.0, 1.0]


def test_index_dictionary_includes_searchable_text():
    """index_dictionary should expose display name, intro text, and item text."""
    block = make_block(
        DictFieldData(
            {
                "display_name": "My Process",
                "introduction_text": "Follow along.",
                "items": [
                    {
                        "title": "Step 1",
                        "label": "First",
                        "description": "First description",
                        "displayAboveLine": True,
                        "position": 0.0,
                    },
                    {
                        "title": "Step 2",
                        "label": "Second",
                        "description": "Second description",
                        "displayAboveLine": False,
                        "position": 1.0,
                    },
                ],
            }
        )
    )

    index = block.index_dictionary()

    assert index["content_type"] == "Process Line"
    assert index["content"]["display_name"] == "My Process"
    assert index["content"]["introduction_text"] == "Follow along."
    assert index["content"]["items"] == (
        "Step 1 First First description Step 2 Second Second description"
    )
    # Layout flags and styling must not leak into the search index.
    assert "displayAboveLine" not in str(index["content"])
    assert "styling" not in index["content"]


def test_index_dictionary_handles_empty_items():
    """index_dictionary should tolerate empty or malformed items."""
    block = make_block(DictFieldData({"items": [], "introduction_text": None}))

    index = block.index_dictionary()

    assert index["content"]["items"] == ""
    assert index["content"]["introduction_text"] == ""
