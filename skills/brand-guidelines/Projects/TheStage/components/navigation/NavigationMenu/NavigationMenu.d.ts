import * as React from 'react';

/**
 * NavigationMenu — from @thestage/ui@0.1.0.
 */
export interface NavigationMenuProps {
  style?: CSSProperties;
  defaultValue?: string;
  className?: string;
  dir?: "ltr" | "rtl";
  id?: string;
  children?: React.ReactNode;
  asChild?: boolean;
  value?: string;
  orientation?: "horizontal" | "vertical";
  /** The duration from when the pointer enters the trigger until the tooltip gets opened. */
  delayDuration?: number;
  /** How much time a user has to enter another trigger without incurring a delay again. */
  skipDelayDuration?: number;
  /** Allows getting a ref to the component instance. Once the component unmounts, React will set `ref.current` to `null` (or  */
  ref?: string | ((instance: HTMLElement) => void | React.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof React.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | React.RefObject<HTMLElement>;
}

export declare const NavigationMenu: React.ComponentType<NavigationMenuProps>;
