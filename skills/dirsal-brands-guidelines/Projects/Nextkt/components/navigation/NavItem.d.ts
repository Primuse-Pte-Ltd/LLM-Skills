import * as React from "react";

/**
 * Account sidebar nav item.
 */
export interface NavItemProps {
  /** Material Symbol NAME (string), e.g. "confirmation_number" — filled automatically when active. */
  icon?: string;
  label: string;
  active?: boolean;
  /** Red Sign Out treatment. */
  danger?: boolean;
  onClick?: () => void;
  style?: React.CSSProperties;
}
export function NavItem(props: NavItemProps): React.JSX.Element;
