import * as React from "react";

/**
 * Calendar-leaf date chip.
 */
export interface DateChipProps {
  /** Three-letter caps month, e.g. "OCT" (lib/format monthShort). "TBA" when unknown. */
  month: string;
  /** Two-digit day, e.g. "24". "--" when unknown. */
  day: string;
  variant?: "leaf" | "glass" | "plain";
  style?: React.CSSProperties;
}
export function DateChip(props: DateChipProps): React.JSX.Element;
