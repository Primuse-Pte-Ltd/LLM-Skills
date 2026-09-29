import * as React from "react";

/**
 * KPI / metric block for dashboards.
 * @startingPoint section="Data" subtitle="Metric / KPI block" viewport="700x160"
 */
export interface StatCardProps {
  label: string;
  value: React.ReactNode;
  caption?: string;
  icon?: React.ReactNode;
  /** Highlight the value in purple — reserve for the single leading metric. */
  highlight?: boolean;
  style?: React.CSSProperties;
}
export function StatCard(props: StatCardProps): JSX.Element;
