import * as React from "react";

/**
 * Account dashboard stat tile.
 */
export interface StatCardProps {
  /** Material Symbol, e.g. <span className="ms">confirmation_number</span>. */
  icon?: React.ReactNode;
  value: React.ReactNode;
  label: string;
  sub?: string;
  onClick?: () => void;
  style?: React.CSSProperties;
}
export function StatCard(props: StatCardProps): JSX.Element;
