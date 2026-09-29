import * as React from "react";

/**
 * Status / tier badge — caps-only, 10–12px, 2px corners.
 */
export interface BadgeProps {
  children?: React.ReactNode;
  /** on-sale (emerald) · primary ("selling fast") · ga / vip / tables (seating tiers) · sold-out · error (scarcity) · neutral (stock). */
  tone?: "on-sale" | "primary" | "ga" | "vip" | "tables" | "sold-out" | "error" | "neutral";
  /** solid = 90% fill + white text (over photos) · tint = 10% wash + colored text (on surfaces) · glass = white/15 + blur (hero). */
  variant?: "solid" | "tint" | "glass";
  /** Uppercase + 0.05em tracking. Default true. */
  caps?: boolean;
  /** sm = 10px (card status) · md = 12px label-caps (tier chips). */
  size?: "sm" | "md";
  style?: React.CSSProperties;
}
export function Badge(props: BadgeProps): JSX.Element;
