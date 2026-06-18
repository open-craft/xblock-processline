"""
Tests for ProcesslineXBlock.
"""

import json

from webob import Request
from xblock.field_data import DictFieldData
from xblock.fields import ScopeIds
from xblock.test.toy_runtime import ToyRuntime

from processline.processline import ProcesslineXBlock


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
