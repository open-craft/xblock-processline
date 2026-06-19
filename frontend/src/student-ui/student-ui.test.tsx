import React from 'react';
import {
  describe, expect, it,
} from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import StudentUi from './student-ui';
import {
  buildDefaultConfiguration,
  normalizePositions,
} from '../processline-helpers';

const configuration = {
  ...buildDefaultConfiguration(),
  items: normalizePositions([
    {
      title: 'Step 1',
      label: 'First label',
      description: 'First description',
      displayAboveLine: true,
      position: 0,
    },
    {
      title: 'Step 2',
      label: 'Second label',
      description: 'Second description',
      displayAboveLine: false,
      position: 0,
    },
  ]),
};

describe('StudentUi', () => {
  it('renders the configured title and first detail card', () => {
    render(<StudentUi configuration={configuration} />);

    expect(screen.getByText('Process Line')).toBeInTheDocument();
    expect(screen.getByText('Step 1 - First label')).toBeInTheDocument();
    expect(screen.getByText('First description')).toBeInTheDocument();
  });

  it('moves between items with next navigation', async () => {
    const user = userEvent.setup();
    render(<StudentUi configuration={configuration} />);

    await user.click(screen.getByRole('button', { name: 'Next detail' }));

    expect(screen.getByText('Step 2 - Second label')).toBeInTheDocument();
    expect(screen.getByText('Second description')).toBeInTheDocument();
  });

  it('selects a node when clicked and updates the detail card', async () => {
    const user = userEvent.setup();
    render(<StudentUi configuration={configuration} />);

    await user.click(screen.getByRole('button', { name: /step 2 second label/i }));

    expect(screen.getByText('Step 2 - Second label')).toBeInTheDocument();
    expect(screen.getByText('Second description')).toBeInTheDocument();
  });

  it('supports a controlled selected item for shared LMS and CMS previews', () => {
    render(
      <StudentUi
        configuration={configuration}
        selectedIndex={1}
      />,
    );

    expect(screen.getByText('Step 2 - Second label')).toBeInTheDocument();
    expect(screen.getByText('Second description')).toBeInTheDocument();
  });
});
