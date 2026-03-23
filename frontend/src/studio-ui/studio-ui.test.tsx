import {
    describe, expect, it, vi,
} from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import StudioUi from './studio-ui';

const jqueryMock = {
    post: vi.fn(() => ({
        done: vi.fn((callback) => {
            callback();
            return { fail: vi.fn() };
        }),
    })),
};
vi.stubGlobal('$', jqueryMock);
vi.mock('./TinyMceEditor', () => ({
    __esModule: true,
    default: () => 'TiNYmCE EDitOR',
}));

describe('StudioUi component test', () => {
});
