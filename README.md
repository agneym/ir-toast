<h1 align=left>Ionic React Imperative Toast 🥂</h1>

<p>
  <a href="https://www.npmjs.com/package/@agney/ir-toast" target="_blank">
    <img alt="npm" src="https://img.shields.io/npm/v/@agney/ir-toast">
  </a>
  <a href="https://github.com/agneym/ir-toast/actions">
    <img src="https://github.com/agneym/ir-toast/workflows/Node%20CI/badge.svg" />
  </a>
  <a href="https://github.com/agneym/ir-toast/blob/master/LICENSE" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/github/license/agneym/ir-toast" />
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
    </ToastProvider>
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

## Properties

### `ToastProvider`

The `useToast` requires the app to be wrapped with a `ToastProvider`. The Provider can also take a `value` as prop which serves as defaults for all toasts created under it.

```typescript
const App: FC = () => {
  <IonApp>
    <ToastProvider value={{ color: 'primary', duration: 2000 }}>
      // ...rest of your application
    <ToastProvider>
  </IonApp>
}
```

Supports all properties in [docs](https://ionicframework.com/docs/api/toast#properties).

### `useToast`

Hook to be used in functional components.

```typescript
function Component: FC = () => {
  const Toast = useToast();

  const handleClick = () => {
    const toast = Toast.create({ message: 'thing' });
    toast.present();
    // When you want to.
    toast.dismiss();
    ...
  }

  // ...
}
```
`Toast` returned from `useToast` supports:

1. `create`

A toast instance is created, takes all the props in [docs](https://ionicframework.com/docs/api/toast#properties) as argument. Returns a toast instance that can be presented by calling `present` and dismissed calling `dismiss` on it.

2. Utility functions: `success`, `warning`, `error`

Takes one argument: message as string. Does not require `present` to be called, directly shows the toast.

```typescript
const toast = toast.success("Success message");
```

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/agneym/ir-toast/issues).

### Development

We use [`yarn` v1](https://classic.yarnpkg.com/) for development. 

```sh
yarn
yarn start
```

### Run tests

```sh
yarn test
```

## Show your support

Give a ⭐️ if this project helped you!

<a href="https://twitter.com/agneymenon" target="_blank">
  <img alt="Twitter: agneymenon" src="https://img.shields.io/twitter/follow/agneymenon.svg?style=social" />
</a>

## 📝 License

Copyright © 2020 [Agney Menon <agney@outlook.in>](https://github.com/agneym).<br />
This project is [MIT](https://github.com/agneym/ir-toast/blob/master/LICENSE) licensed.