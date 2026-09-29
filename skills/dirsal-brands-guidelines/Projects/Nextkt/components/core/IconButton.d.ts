import * as React from "react";

/**
 * Icon-only control with optional cart-count badge.
 */
export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  /** Accessible label (required — icons are decorative). */
  label: string;
  /** ghost = header cart/menu · brand = teal glyph (mobile cart) · glass = carousel arrows over photos · floating = mobile back button. */
  variant?: "ghost" | "brand" | "glass" | "floating";
  /** Pixel size. 40 default; 48 for carousel arrows. */
  size?: number;
  /** Cart item count — renders the teal 18px badge with a surface ring. */
  count?: number;
  style?: React.CSSProperties;
}
export function IconButton(props: IconButtonProps): JSX.Element;
