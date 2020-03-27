import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { useToast, ToastProvider } from '../.';

const App = () => {
  return (
    <ToastProvider>
      <p>Thing</p>
    </ToastProvider>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
