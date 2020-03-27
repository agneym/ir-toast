import * as React from 'react';
import { ToastProvider } from '..';

import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

describe('it', () => {
  it('renders children passed to it', () => {
    const children = 'Other things';
    const { getByText } = render(
      <ToastProvider>
        {children}
      </ToastProvider>
    );
    expect(getByText(children)).toBeDefined();
  });
});
