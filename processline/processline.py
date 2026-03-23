"""
An XBlock for creating a process line illustration.
"""

from django.utils import translation
from web_fragments.fragment import Fragment
from xblock.core import XBlock
from xblock.fields import Dict, List, Scope, String

try:
    import importlib_resources
except ImportError:  # pragma: no cover
    from importlib import resources as importlib_resources
try:
    from xmodule.edxnotes_utils import edxnotes
except ModuleNotFoundError:

    def edxnotes(func):  # noqa: D103
        return func


@XBlock.needs("user")
@edxnotes
class ProcesslineXBlock(XBlock):
    """
    Accordion XBlock.
    """

    display_name = String(default=translation.gettext_noop("ProcessLine"))

    def resource_string(self, path):
        """Handy helper for getting resources from our kit."""
        data = importlib_resources.files("processline").joinpath(path).read_text("utf8")
        return data

    def get_html(self):
        """
        Student notes helper that returns the HTML generated for the LMS.
        """
        html = self.resource_string("static/html/processline_student.html")
        return html

    def student_view(self, context=None):  # pylint: disable=unused-argument
        """
        Create primary view of the ProcesslineXBlock, shown to students when viewing courses.
        """
        frag = Fragment(self.get_html())
        frag.add_javascript(self.resource_string("static/student.js"))
        frag.add_css_url(self.runtime.local_resource_url(self, "public/student-ui.css"))
        frag.initialize_js(
            "ProcesslineBlock",
            {},
        )
        return frag

    @XBlock.json_handler
    def studio_save(
        self, data, suffix=""
    ):  # pragma: no cover pylint: disable=unused-argument
        """Save config and data based on data received at this API endpoint."""
        return {"result": "success"}

    def studio_view(self, context=None):  # pylint: disable=unused-argument
        """
        Create primary view of the ProcesslineXBlock, shown to students when viewing courses.
        """
        html = self.resource_string("static/html/processline.html")
        frag = Fragment(html)
        frag.add_javascript(self.resource_string("static/studio.js"))
        frag.add_css_url(self.runtime.local_resource_url(self, "public/studio-ui.css"))
        frag.initialize_js(
            "ProcesslineEditor",
            {},
        )
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
                "Multiple AccordionXBlock",
                """<vertical_demo>
                <processline/>
                <processline/>
                <processline/>
                </vertical_demo>
             """,
            ),
        ]
