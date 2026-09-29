import * as React from "react";

/**
 * Mobile top app bar — menu · logo · cart.
 * @startingPoint section="Mobile" subtitle="Mobile top app bar" viewport="390x120"
 */
export interface MobileAppBarProps {
  /** Path to assets/logo.svg relative to the page. */
  logoSrc?: string;
  cartCount?: number;
  onMenu?: () => void;
  onCart?: () => void;
  onLogo?: () => void;
  style?: React.CSSProperties;
}
export function MobileAppBar(props: MobileAppBarProps): React.JSX.Element;
