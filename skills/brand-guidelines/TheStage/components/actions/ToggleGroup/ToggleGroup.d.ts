import * as React from 'react';

/**
 * ToggleGroup — from @thestage/ui@0.1.0.
 */
export interface ToggleGroupProps {
  style?: CSSProperties;
  /** The value of the item that is pressed when initially rendered. Use `defaultValue` if you do not need to control the stat */
  defaultValue?: string | string[];
  className?: string;
  dir?: "ltr" | "rtl";
  id?: string;
  children?: React.ReactNode;
  asChild?: boolean;
  /** Whether the group is disabled from user interaction. */
  disabled?: boolean;
  /** The controlled stateful value of the item that is pressed. */
  value?: string | string[];
  type: "multiple" | "single";
  orientation?: "horizontal" | "vertical";
  loop?: boolean;
  /** Whether the group should maintain roving focus of its buttons. */
  rovingFocus?: boolean;
  size?: "default" | "sm" | "lg";
  variant?: "default" | "outline";
  /** Allows getting a ref to the component instance. Once the component unmounts, React will set `ref.current` to `null` (or  */
  ref?: string | ((instance: HTMLDivElement) => void | React.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof React.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | React.RefObject<HTMLDivElement>;
}

export declare const ToggleGroup: React.ComponentType<ToggleGroupProps>;
