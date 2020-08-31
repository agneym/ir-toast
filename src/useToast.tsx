import React, {
  createContext,
  useContext,
  FC,
  useCallback,
  useMemo,
  useState,
  useRef,
} from 'react';
import { ToastOptions, IonToast } from '@ionic/react';
import { ReactControllerProps } from '@ionic/react/dist/types/components/createControllerComponent';

type ReactToastOptions = ToastOptions & Partial<ReactControllerProps>;

type ToastInstance = {
  present: (options?: ReactToastOptions) => void;
  dismiss: () => void;
};

type ToastProviderOptions = {
  create: (options: ReactToastOptions) => ToastInstance;
  success: (message: string) => ToastInstance;
  error: (message: string) => ToastInstance;
  warning: (message: string) => ToastInstance;
};

const ToastContext = createContext<ToastProviderOptions | null>(null);
const { Provider } = ToastContext;

interface Props {
  value?: ToastOptions;
}

export const useToast = () => useContext(ToastContext) as ToastProviderOptions;

export const ToastProvider: FC<Props> = ({ value, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [options, setOptions] = useState<ReactToastOptions>();
  const ref = useRef<HTMLIonToastElement | null>(null);

  const create = useCallback(
    (options: ReactToastOptions) => {
      const present = (options: ReactToastOptions) => () => {
        setOptions({
          ...value,
          ...options,
        });
        setIsOpen(true);
      };

      const dismiss = () => {
        ref.current?.dismiss();
      };

      return {
        present: present(options),
        dismiss,
      };
    },
    [value]
  );

  const contextValue = useMemo(() => {
    const translateToOptions = (color: 'success' | 'warning' | 'danger') => (
      message: string
    ) => {
      const toast = create({ message, color });
      toast.present();
      return toast;
    };

    return {
      create,
      success: translateToOptions('success'),
      error: translateToOptions('danger'),
      warning: translateToOptions('warning'),
    };
  }, [create]);

  return (
    <Provider value={contextValue}>
      {children}
      <IonToast
        ref={ref}
        isOpen={isOpen}
        onDidDismiss={() => setIsOpen(false)}
        {...options}
      />
    </Provider>
  );
};
