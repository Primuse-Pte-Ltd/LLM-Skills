import * as React from "react";

/**
 * Mobile bottom tab bar.
 */
export interface MobileTabBarProps {
  /** Defaults to Discover / Tickets / Venues / Profile. */
  items?: Array<{ key: string; label: string; icon: string }>;
  value?: string;
  onChange?: (key: string) => void;
  /** Bottom padding for the home indicator (env(safe-area-inset-bottom) in production). Default 34. */
  safeArea?: number;
  style?: React.CSSProperties;
}
export function MobileTabBar(props: MobileTabBarProps): React.JSX.Element;
