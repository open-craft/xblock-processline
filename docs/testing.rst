.. _chapter-testing:

Testing
#######

xblock-processline has Python, frontend, and documentation checks to catch
potential problems during development.

To run the full Python test matrix and repo checks:

.. code-block:: bash

    $ tox

To run just the Python unit tests in your current environment:

.. code-block:: bash

    $ pytest

To run just the Python code quality checks:

.. code-block:: bash

    $ tox -e quality

To build and validate the documentation:

.. code-block:: bash

    $ tox -e docs

To run the frontend checks:

.. code-block:: bash

    $ cd frontend
    $ npm ci
    $ npm run lint
    $ npm run coverage
    $ npm run check-build
