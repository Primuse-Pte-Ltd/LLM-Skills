import * as React from 'react';

/**
 * Label — from @thestage/ui@0.1.0.
 */
export interface LabelProps {
  style?: CSSProperties;
  className?: string;
  id?: string;
  children?: React.ReactNode;
  asChild?: boolean;
  /** Allows getting a ref to the component instance. Once the component unmounts, React will set `ref.current` to `null` (or  */
  ref?: string | ((instance: HTMLLabelElement) => void | React.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof React.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | React.RefObject<HTMLLabelElement>;
}

export declare const Label: React.ComponentType<LabelProps>;
