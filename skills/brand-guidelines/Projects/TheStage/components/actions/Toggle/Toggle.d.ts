import * as React from 'react';

/**
 * Toggle — from @thestage/ui@0.1.0.
 */
export interface ToggleProps {
  style?: CSSProperties;
  className?: string;
  id?: string;
  children?: React.ReactNode;
  asChild?: boolean;
  /** The controlled state of the toggle. */
  pressed?: boolean;
  /** The state of the toggle when initially rendered. Use `defaultPressed` if you do not need to control the state of the tog */
  defaultPressed?: boolean;
  size?: "default" | "sm" | "lg";
  variant?: "default" | "outline";
  /** Allows getting a ref to the component instance. Once the component unmounts, React will set `ref.current` to `null` (or  */
  ref?: string | ((instance: HTMLButtonElement) => void | React.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof React.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | React.RefObject<HTMLButtonElement>;
}

export declare const Toggle: React.ComponentType<ToggleProps>;
