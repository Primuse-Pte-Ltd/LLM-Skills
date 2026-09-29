import * as React from 'react';

/**
 * Badge — from @thestage/ui@0.1.0.
 */
export interface BadgeProps {
  className?: string;
  id?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  variant?: "default" | "destructive" | "outline" | "secondary";
}

export declare const Badge: React.ComponentType<BadgeProps>;
