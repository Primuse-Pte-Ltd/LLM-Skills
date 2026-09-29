import * as React from 'react';

/**
 * AlertDialog — from @thestage/ui@0.1.0.
 */
export interface AlertDialogProps {
  children?: React.ReactNode;
  defaultOpen?: boolean;
  open?: boolean;
}

export declare const AlertDialog: React.ComponentType<AlertDialogProps>;
