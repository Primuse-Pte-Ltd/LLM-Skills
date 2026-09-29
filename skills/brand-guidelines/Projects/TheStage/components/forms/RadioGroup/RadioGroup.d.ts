import * as React from 'react';

/**
 * RadioGroup — from @thestage/ui@0.1.0.
 */
export interface RadioGroupProps {
  style?: CSSProperties;
  defaultValue?: string;
  className?: string;
  dir?: "ltr" | "rtl";
  id?: string;
  children?: React.ReactNode;
  asChild?: boolean;
  disabled?: boolean;
  value?: string;
  name?: string;
  orientation?: "horizontal" | "vertical";
  required?: boolean;
  loop?: boolean;
  /** Allows getting a ref to the component instance. Once the component unmounts, React will set `ref.current` to `null` (or  */
  ref?: string | ((instance: HTMLDivElement) => void | React.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof React.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | React.RefObject<HTMLDivElement>;
}

export declare const RadioGroup: React.ComponentType<RadioGroupProps>;
