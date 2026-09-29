import * as React from "react";

/**
 * Buyer / organizer avatar with initials fallback.
 */
export interface AvatarProps {
  src?: string;
  name?: string;
  /** xs 20 (Presented-by org dot) · sm 32 · md 40 · lg 56 · xl 96 (account hero), or a pixel number. */
  size?: "xs" | "sm" | "md" | "lg" | "xl" | number;
  /** Account-hero tile: 8px corners, 4px surface ring, shadow-lg, single initial. */
  tile?: boolean;
  /** Fallback fill — an organizer's branding.primaryColor for "Presented by". */
  color?: string;
  style?: React.CSSProperties;
}
export function Avatar(props: AvatarProps): JSX.Element;
