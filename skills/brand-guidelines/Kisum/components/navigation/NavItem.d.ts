import * as React from "react";

export interface NavItemProps {
  icon?: React.ReactNode;
  label: string;
  active?: boolean;
  badge?: number | string;
  onClick?: () => void;
  style?: React.CSSProperties;
}
export function NavItem(props: NavItemProps): JSX.Element;
