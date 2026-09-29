import * as React from "react";

export interface BadgeProps {
  children?: React.ReactNode;
  tone?: "neutral" | "brand" | "success" | "danger" | "warning" | "outline";
  pill?: boolean;
  dot?: boolean;
  uppercase?: boolean;
  style?: React.CSSProperties;
}
export function Badge(props: BadgeProps): JSX.Element;
