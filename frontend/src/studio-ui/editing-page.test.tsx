import React from 'react';
import {
  describe, expect, it, vi,
} from 'vitest';
import {
  render, screen, within,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import EditingPage from './editing-page';
import { buildDefaultConfiguration } from '../processline-helpers';

describe('EditingPage', () => {
  it('walks through the wizard and calls save on the placement page', async () => {
    const user = userEvent.setup();
    const onSave = vi.fn();
    render(
      <EditingPage
        initialConfiguration={buildDefaultConfiguration()}
        isSaving={false}
        saveError=""
        onCancel={vi.fn()}
        onSave={onSave}
      />,
    );

    expect(screen.getByLabelText('Display Name')).toBeInTheDocument();
    await user.click(screen.getByRole('button', { name: 'Continue' }));
    expect(screen.getByText('Styling of Line Items')).toBeInTheDocument();

    await user.click(screen.getByRole('button', { name: 'Continue' }));
    expect(screen.getByRole('button', { name: '+ Add line item' })).toBeInTheDocument();

    await user.click(screen.getByRole('button', { name: 'Continue' }));
    expect(screen.getByText('Placement of Line Items')).toBeInTheDocument();

    await user.click(screen.getByRole('button', { name: 'Save' }));
    expect(onSave).toHaveBeenCalledTimes(1);
  });

  it('adds a new line item from the items page', async () => {
    const user = userEvent.setup();
    render(
      <EditingPage
        initialConfiguration={buildDefaultConfiguration()}
        isSaving={false}
        saveError=""
        onCancel={vi.fn()}
        onSave={vi.fn()}
      />,
    );

    await user.click(screen.getAllByRole('button', { name: 'Continue' })[0]);
    await user.click(screen.getByRole('button', { name: 'Continue' }));
    await user.click(screen.getByRole('button', { name: '+ Add line item' }));

    expect(screen.getByRole('button', { name: 'Step 4' })).toBeInTheDocument();
  });

  it('reuses the student preview and syncs it with placement selection', async () => {
    const user = userEvent.setup();
    const configuration = buildDefaultConfiguration();
    configuration.items[2].description = 'Third description';

    render(
      <EditingPage
        initialConfiguration={configuration}
        isSaving={false}
        saveError=""
        onCancel={vi.fn()}
        onSave={vi.fn()}
      />,
    );

    await user.click(screen.getByRole('button', { name: 'Continue' }));
    await user.click(screen.getByRole('button', { name: 'Continue' }));
    await user.click(screen.getByRole('button', { name: 'Continue' }));
    await user.click(screen.getByRole('button', { name: 'Select Step 3' }));

    expect(screen.getByRole('button', { name: 'Select Step 3' })).toHaveAttribute('aria-pressed', 'true');
    expect(within(screen.getByLabelText('Student preview')).getByText('Third description')).toBeInTheDocument();
  });
});
