import * as React from 'react';

/**
 * Checkbox — from @thestage/ui@0.1.0.
 * @replaces input[type=checkbox]
 */
export interface CheckboxProps {
  style?: CSSProperties;
  defaultChecked?: boolean | "indeterminate";
  className?: string;
  id?: string;
  children?: React.ReactNode;
  asChild?: boolean;
  checked?: boolean | "indeterminate";
  required?: boolean;
  /** Allows getting a ref to the component instance. Once the component unmounts, React will set `ref.current` to `null` (or  */
  ref?: string | ((instance: HTMLButtonElement) => void | React.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof React.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | React.RefObject<HTMLButtonElement>;
}

export declare const Checkbox: React.ComponentType<CheckboxProps>;
