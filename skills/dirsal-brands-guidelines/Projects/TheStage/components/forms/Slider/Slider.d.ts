import * as React from 'react';

/**
 * Slider — from @thestage/ui@0.1.0.
 * @replaces input[type=range]
 */
export interface SliderProps {
  form?: string;
  style?: CSSProperties;
  defaultValue?: number[];
  className?: string;
  dir?: "ltr" | "rtl";
  id?: string;
  children?: React.ReactNode;
  asChild?: boolean;
  disabled?: boolean;
  value?: number[];
  max?: number;
  min?: number;
  name?: string;
  orientation?: "horizontal" | "vertical";
  step?: number;
  inverted?: boolean;
  minStepsBetweenThumbs?: number;
  /** Allows getting a ref to the component instance. Once the component unmounts, React will set `ref.current` to `null` (or  */
  ref?: string | ((instance: HTMLSpanElement) => void | React.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof React.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | React.RefObject<HTMLSpanElement>;
}

export declare const Slider: React.ComponentType<SliderProps>;
