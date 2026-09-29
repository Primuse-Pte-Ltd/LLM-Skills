import * as React from "react";

/**
 * Mobile upcoming-events list row.
 */
export interface EventRowProps {
  title: string;
  venue?: string;
  city?: string;
  /** Pre-formatted, e.g. "From Rp 350.000". */
  price?: string;
  month: string;
  day: string;
  /** Initial heart state. */
  favorite?: boolean;
  /** Drop the bottom hairline on the last row. */
  last?: boolean;
  onClick?: () => void;
  style?: React.CSSProperties;
}
export function EventRow(props: EventRowProps): JSX.Element;
