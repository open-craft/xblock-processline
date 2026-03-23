import React from 'react';
import {
    describe, expect, test, vi,
} from 'vitest';
import {
    fireEvent, render, screen, waitFor,
} from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import EditingPage from './editing-page';

vi.mock('./TinyMceEditor', () => ({
    __esModule: true,
    default: () => 'TiNYmCE EDitOR',
}));

describe('EditingPage', () => {
});
