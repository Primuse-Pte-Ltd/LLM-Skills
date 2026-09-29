import * as React from 'react';

/**
 * Toaster — from @thestage/ui@0.1.0.
 */
export interface ToasterProps {
  id?: string;
  invert?: boolean;
  theme?: "light" | "dark" | "system";
  position?: "top-left" | "top-right" | "bottom-left" | "bottom-right" | "top-center" | "bottom-center";
  hotkey?: string[];
  richColors?: boolean;
  expand?: boolean;
  duration?: number;
  gap?: number;
  visibleToasts?: number;
  closeButton?: boolean;
  toastOptions?: ToastOptions;
  className?: string;
  style?: CSSProperties;
  offset?: string | number | { top?: string | number; right?: string | number; bottom?: string | number; left?: string | number; };
  mobileOffset?: string | number | { top?: string | number; right?: string | number; bottom?: string | number; left?: string | number; };
  dir?: "auto" | "ltr" | "rtl";
  swipeDirections?: ("top" | "bottom" | "left" | "right")[];
  icons?: ToastIcons;
  containerAriaLabel?: string;
  /** Allows getting a ref to the component instance. Once the component unmounts, React will set `ref.current` to `null` (or  */
  ref?: string | ((instance: HTMLElement) => void | DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | RefObject<HTMLElement>;
}

export declare const Toaster: React.ComponentType<ToasterProps>;
