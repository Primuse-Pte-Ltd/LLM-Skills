import * as React from 'react';

/**
 * HoverCard — from @thestage/ui@0.1.0.
 */
export interface HoverCardProps {
  children?: React.ReactNode;
  open?: boolean;
  defaultOpen?: boolean;
  openDelay?: number;
  closeDelay?: number;
}

export declare const HoverCard: React.ComponentType<HoverCardProps>;
