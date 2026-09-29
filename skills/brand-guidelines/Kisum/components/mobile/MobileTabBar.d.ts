import * as React from "react";

export interface MobileTabItem {
  key: string;
  label: string;
  icon: React.ReactNode;
  activeIcon?: React.ReactNode;
}

/**
 * Mobile bottom navigation bar with purple-tint active pill.
 * @startingPoint section="Mobile" subtitle="Mobile bottom nav bar" viewport="390x120"
 */
export interface MobileTabBarProps {
  items: MobileTabItem[];
  value?: string;
  onChange?: (key: string) => void;
  style?: React.CSSProperties;
}
export function MobileTabBar(props: MobileTabBarProps): JSX.Element;
