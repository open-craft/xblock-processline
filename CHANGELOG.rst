Change Log
##########

..
   All enhancements and patches to processline will be documented
   in this file.  It adheres to the structure of https://keepachangelog.com/ ,
   but in reStructuredText instead of Markdown (for ease of incorporation into
   Sphinx documentation and the PyPI description).

   This project adheres to Semantic Versioning (https://semver.org/).

.. There should always be an "Unreleased" section for changes pending release.

Unreleased
**********

1.0.2 – 2026-07-31
**********************************************

Fixed
=====

* Studio editor not rendering in v2 content libraries (learning-core runtime ``handlerUrl`` compatibility).
* Editor now fills the available height in the library edit modal (was fixed at 375px).

0.1.0 – 2026-07-21
**********************************************

Added
=====

* Content-search (Meilisearch) support: introduction text and item titles/labels/descriptions are indexed via ``index_dictionary``.



