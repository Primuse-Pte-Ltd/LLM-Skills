import * as React from 'react';

/**
 * Button — from @thestage/ui@0.1.0.
 * @replaces button
 */
export interface ButtonProps {
  asChild?: boolean;
  /** Show a spinner and disable the button while truthy. Caller-controlled — pair with `useTransition` / local `useState` so  */
  pending?: boolean;
  /** Force a short spinner feedback on click even for sync handlers. */
  spinOnClick?: boolean;
  /** Minimum spinner visibility when `spinOnClick` is enabled. */
  minPendingMs?: number;
  className?: string;
  id?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  size?: "default" | "sm" | "lg" | "icon";
  variant?: "link" | "default" | "destructive" | "outline" | "secondary" | "ghost";
  /** Allows getting a ref to the component instance. Once the component unmounts, React will set `ref.current` to `null` (or  */
  ref?: string | ((instance: HTMLButtonElement) => void | React.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof React.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | React.RefObject<HTMLButtonElement>;
}

export declare const Button: React.ComponentType<ButtonProps>;
