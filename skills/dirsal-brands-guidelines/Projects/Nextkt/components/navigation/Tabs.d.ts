import * as React from "react";

/**
 * Tab strip — nav / underline / chips / segmented.
 */
export interface TabsProps {
  tabs?: string[];
  value?: string;
  onChange?: (tab: string) => void;
  /** nav = desktop header links · underline = caps category filter · chips = mobile filter chips · segmented = auth toggle. */
  variant?: "nav" | "underline" | "chips" | "segmented";
  style?: React.CSSProperties;
}
export function Tabs(props: TabsProps): React.JSX.Element;
