<h1 align=left>Ionic React Imperative Toast 🥂</h1>

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