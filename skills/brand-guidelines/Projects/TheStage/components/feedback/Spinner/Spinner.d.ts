import * as React from 'react';

/**
 * Spinner — from @thestage/ui@0.1.0.
 */
export interface SpinnerProps {
  className?: string;
  id?: string;
  style?: CSSProperties;
  children?: React.ReactNode;
  /** Allows getting a ref to the component instance. Once the component unmounts, React will set `ref.current` to `null` (or  */
  ref?: string | ((instance: SVGSVGElement) => void | DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | RefObject<SVGSVGElement>;
}

export declare const Spinner: React.ComponentType<SpinnerProps>;
