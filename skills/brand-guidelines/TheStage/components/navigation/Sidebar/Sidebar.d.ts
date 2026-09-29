import * as React from 'react';

/**
 * Sidebar — from @thestage/ui@0.1.0.
 */
export interface SidebarProps {
  style?: CSSProperties;
  className?: string;
  id?: string;
  children?: React.ReactNode;
  variant?: "inset" | "sidebar" | "floating";
  side?: "left" | "right";
  collapsible?: "icon" | "none" | "offcanvas";
  /** Allows getting a ref to the component instance. Once the component unmounts, React will set `ref.current` to `null` (or  */
  ref?: string | ((instance: HTMLDivElement) => void | React.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof React.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | React.RefObject<HTMLDivElement>;
}

export declare const Sidebar: React.ComponentType<SidebarProps>;
