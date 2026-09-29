import * as React from "react";

/**
 * Mobile top app bar (64px, sticky, blurred).
 * @startingPoint section="Mobile" subtitle="Mobile top app bar" viewport="390x120"
 */
export interface MobileAppBarProps {
  title?: string;
  eyebrow?: string;
  brand?: React.ReactNode;
  right?: React.ReactNode;
  style?: React.CSSProperties;
}
export function MobileAppBar(props: MobileAppBarProps): React.JSX.Element;
