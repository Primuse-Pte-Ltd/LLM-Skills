import * as React from "react";

export interface SectionHeaderProps {
  title: string;
  count?: number | string;
  icon?: React.ReactNode;
  action?: React.ReactNode;
  description?: string;
  style?: React.CSSProperties;
}
export function SectionHeader(props: SectionHeaderProps): JSX.Element;
