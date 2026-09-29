import * as React from 'react';

/**
 * AspectRatio — from @thestage/ui@0.1.0.
 */
export interface AspectRatioProps {
  ratio?: number;
  style?: CSSProperties;
  className?: string;
  id?: string;
  children?: React.ReactNode;
  asChild?: boolean;
  /** Allows getting a ref to the component instance. Once the component unmounts, React will set `ref.current` to `null` (or  */
  ref?: string | ((instance: HTMLDivElement) => void | DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | RefObject<HTMLDivElement>;
}

export declare const AspectRatio: React.ComponentType<AspectRatioProps>;
