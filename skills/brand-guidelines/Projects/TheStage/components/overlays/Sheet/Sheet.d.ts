import * as React from 'react';

/**
 * Sheet — from @thestage/ui@0.1.0.
 */
export interface SheetProps {
  children?: React.ReactNode;
  open?: boolean;
  defaultOpen?: boolean;
  modal?: boolean;
}

export declare const Sheet: React.ComponentType<SheetProps>;
