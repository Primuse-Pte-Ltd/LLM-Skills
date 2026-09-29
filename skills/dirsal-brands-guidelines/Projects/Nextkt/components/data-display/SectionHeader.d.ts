import * as React from "react";

/**
 * Section title row with optional action.
 */
export interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  /** Action label — "View Full Calendar" (lg), "See All" (md), "View All" (eyebrow). */
  action?: string;
  onAction?: () => void;
  /** lg = desktop headline-lg · md = mobile headline-md · eyebrow = caps section label. */
  size?: "lg" | "md" | "eyebrow";
  style?: React.CSSProperties;
}
export function SectionHeader(props: SectionHeaderProps): JSX.Element;
