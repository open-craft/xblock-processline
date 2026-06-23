import {
  describe, expect, it, vi,
} from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import StudioUi from './studio-ui';
import { buildDefaultConfiguration } from '../processline-helpers';

let savedRequest: Record<string, unknown> | undefined;

const ajaxMock = vi.fn((request: Record<string, unknown>) => {
  savedRequest = request;
  return {
    done: vi.fn((callback) => {
      callback({ result: 'success', configuration: buildDefaultConfiguration() });
      return { fail: vi.fn() };
    }),
  };
});

vi.stubGlobal('$', {
  ajax: ajaxMock,
});

describe('StudioUi component test', () => {
  it('posts configuration to the save handler', async () => {
    const user = userEvent.setup();
    const notify = vi.fn();

    render(
      <StudioUi
        initialConfiguration={buildDefaultConfiguration()}
        studioSaveUrl="/fake/save"
        runtime={{
          handlerUrl: vi.fn(),
          notify,
        }}
      />,
    );

    await user.click(screen.getByRole('link', { name: 'Continue' }));
    await user.click(screen.getByRole('link', { name: 'Continue' }));
    await user.click(screen.getByRole('link', { name: 'Continue' }));
    await user.click(screen.getByRole('link', { name: 'Save' }));

    expect(ajaxMock).toHaveBeenCalledTimes(1);
    expect(savedRequest).toMatchObject({
      url: '/fake/save',
      method: 'POST',
      contentType: 'application/json',
    });
    expect(notify).toHaveBeenCalledWith('save', { state: 'start' });
    expect(notify).toHaveBeenCalledWith('save', { state: 'end' });
  });
});
