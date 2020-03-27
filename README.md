<h1 align=left>Ionic React Imperative Toast 🥂</h1>

<p>
  <a href="https://www.npmjs.com/package/@agney/react-avatar" target="_blank">
    <img alt="npm" src="https://img.shields.io/npm/v/@agney/ir-toast">
  </a>
  <a href="https://github.com/agneym/ir-toast/actions">
    <img src="https://github.com/agneym/ir-toast/workflows/Node%20CI/badge.svg" />
  </a>
  <a href="https://github.com/agneym/ir-toast/blob/master/LICENSE" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/github/license/agneym/react-avatar" />
  </a>
  <a href="https://www.npmjs.com/package/@agney/ir-toast" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/npm/types/scrub-js.svg" />
  </a>
  <a href="https://prettier.io">
    <img alt="code style: prettier" src="https://img.shields.io/badge/code_style-prettier-ff69b4.svg" />
  </a>
  <a href="http://makeapullrequest.com">
    <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg" />
  </a>
</p>

This packages enables the use of imperative Toasts as in Angular.

## Usage

```typescript
import { ToastProvider, useToast } from "@agney/ir-toast";

// Wrap you App.tsx with ToastProvider
const App: FC = () => {
  <IonApp>
    <ToastProvider>
      // ...rest of your application
    <ToastProvider>
  </IonApp>
}

// In your component 
const RegisterForm: FC () => {
  const Toast = useToast();
  // ...

  function validate() {
    const toast = Toast.warning('Passwords don\'t match');
  }

  function submit(data) {
    try {
      const response = await api.register(data);
      Toast.success('Registration Successful');
    } catch() {
      Toast.error('Request failed');
    }
  }
}
```

## Installation

```bash
npm i @agney/ir-toast
```
Requires react 16.8 or higher and @ionic/react 5 or higher.