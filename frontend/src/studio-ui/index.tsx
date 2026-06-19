import * as React from 'react';
import * as ReactDOM from 'react-dom';
import StudioUi from './studio-ui';
import '../student-ui/style.scss';
import './style.scss';
import { buildDefaultConfiguration } from '../processline-helpers';
import type { ProcessLineConfiguration } from '../processline-types';

const buildConfigurationFromData = (data: XBlockData): ProcessLineConfiguration => {
  const defaultConfiguration = buildDefaultConfiguration();
  return {
    ...defaultConfiguration,
    displayName: data.displayName || defaultConfiguration.displayName,
    introductionText: data.introductionText || defaultConfiguration.introductionText,
    styling: {
      ...defaultConfiguration.styling,
      ...(data.styling || {}),
    },
    items: Array.isArray(data.items) ? data.items as ProcessLineConfiguration['items'] : defaultConfiguration.items,
  };
};

// eslint-disable-next-line import/prefer-default-export
export const renderEditor = (runtime: XBlockRuntime, element: Element | null, data: XBlockData) => {
  const container = element && 'jquery' in element ? element[0] : element;

  if (!container || !(container instanceof Element)) {
    // eslint-disable-next-line no-console
    console.error('Invalid DOM element provided to renderEditor:', element);
    return;
  }

  const studioSaveUrl = runtime.handlerUrl(container, 'studio_save');
  ReactDOM.render(
    (
      <React.StrictMode>
        <StudioUi
          initialConfiguration={buildConfigurationFromData(data)}
          studioSaveUrl={studioSaveUrl}
          runtime={runtime}
        />
      </React.StrictMode>
    ),
    container,
  );
};
