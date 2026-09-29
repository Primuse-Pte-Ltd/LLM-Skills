import * as React from 'react';

/**
 * ContextMenu — from @thestage/ui@0.1.0.
 */
export interface ContextMenuProps {
  children?: React.ReactNode;
  open?: boolean;
  dir?: "ltr" | "rtl";
  modal?: boolean;
}

export declare const ContextMenu: React.ComponentType<ContextMenuProps>;
