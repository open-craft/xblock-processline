import * as React from 'react';
import * as ReactDOM from 'react-dom';
import StudentUi from './student-ui';
import './style.scss';
import { buildDefaultConfiguration } from '../processline-helpers';
import type { ProcessLineConfiguration } from '../processline-types';

const buildConfigurationFromData = (data: XBlockData): ProcessLineConfiguration => ({
  ...buildDefaultConfiguration(),
  displayName: data.displayName || 'Process Line',
  introductionText: data.introductionText || 'Click and drag to explore. Select an item for more details.',
  styling: {
    ...buildDefaultConfiguration().styling,
    ...(data.styling || {}),
  },
  items: Array.isArray(data.items) ? data.items as ProcessLineConfiguration['items'] : buildDefaultConfiguration().items,
});

// eslint-disable-next-line import/prefer-default-export
export const renderBlock = (element: Element | null, data: XBlockData) => {
  const container = element && 'jquery' in element ? element[0] : element;

  if (!container || !(container instanceof Element)) {
    // eslint-disable-next-line no-console
    console.error('Invalid DOM element provided to renderBlock:', element);
    return;
  }

  ReactDOM.render(
    (
      <React.StrictMode>
        <StudentUi configuration={buildConfigurationFromData(data)} />
      </React.StrictMode>
    ),
    container,
  );
};
