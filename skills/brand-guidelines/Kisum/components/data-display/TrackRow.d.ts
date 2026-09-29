import * as React from "react";

export interface TrackRowProps {
  rank?: number;
  thumb?: string;
  title: string;
  subtitle?: string;
  metric?: React.ReactNode;
  trend?: string;
  trendUp?: boolean;
  onClick?: () => void;
  style?: React.CSSProperties;
}
export function TrackRow(props: TrackRowProps): JSX.Element;
