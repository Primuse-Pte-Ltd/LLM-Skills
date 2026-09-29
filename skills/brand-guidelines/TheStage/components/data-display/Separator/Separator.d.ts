import * as React from 'react';

/**
 * Separator — from @thestage/ui@0.1.0.
 */
export interface SeparatorProps {
  style?: CSSProperties;
  className?: string;
  id?: string;
  children?: React.ReactNode;
  asChild?: boolean;
  /** Either `vertical` or `horizontal`. Defaults to `horizontal`. */
  orientation?: "horizontal" | "vertical";
  /** Whether or not the component is purely decorative. When true, accessibility-related attributes are updated so that that  */
  decorative?: boolean;
  /** Allows getting a ref to the component instance. Once the component unmounts, React will set `ref.current` to `null` (or  */
  ref?: string | ((instance: HTMLDivElement) => void | React.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof React.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | React.RefObject<HTMLDivElement>;
}

export declare const Separator: React.ComponentType<SeparatorProps>;
