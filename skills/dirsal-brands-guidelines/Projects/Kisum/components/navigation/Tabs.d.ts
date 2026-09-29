import * as React from "react";

export interface TabItem { value: string; label: string; }

/**
 * Horizontal detail-tab strip with brand-emphasis active state.
 * @startingPoint section="Navigation" subtitle="Detail tab strip" viewport="700x120"
 */
export interface TabsProps {
  tabs: (string | TabItem)[];
  value?: string;
  onChange?: (value: string) => void;
  style?: React.CSSProperties;
}
export function Tabs(props: TabsProps): JSX.Element;
