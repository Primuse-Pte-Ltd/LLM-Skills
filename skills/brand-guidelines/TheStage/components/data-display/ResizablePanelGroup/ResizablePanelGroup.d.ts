import * as React from 'react';

/**
 * ResizablePanelGroup — from @thestage/ui@0.1.0.
 */
export interface ResizablePanelGroupProps {
  style?: CSSProperties;
  className?: string;
  children?: React.ReactNode;
  autoSaveId?: string;
  direction: "horizontal" | "vertical";
  id?: string;
  keyboardResizeBy?: number;
  storage?: ResizablePrimitive.PanelGroupStorage;
  tagName?: "object" | "a" | "button" | "div" | "form" | "h2" | "h3" | "img" | "input" | "label" | "li" | "nav" | "ol" | "p" | "select" | "span" | (string & {}) /* +96 more */;
  /** Allows getting a ref to the component instance. Once the component unmounts, React will set `ref.current` to `null` (or  */
  ref?: unknown;
}

export declare const ResizablePanelGroup: React.ComponentType<ResizablePanelGroupProps>;
