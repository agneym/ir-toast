import * as React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { mockIonicReact } from '@ionic/react-test-utils';

import { ToastProvider } from '..';

mockIonicReact();

describe('it', () => {
  it('renders children passed to it', () => {
    const children = 'Other things';
    const { getByText } = render(<ToastProvider>{children}</ToastProvider>);
    expect(getByText(children)).toBeDefined();
  });
});
