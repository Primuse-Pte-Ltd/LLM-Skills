import * as React from "react";

/**
 * Flat surface container.
 * @startingPoint section="Core" subtitle="Surface card + hover lift" viewport="700x220"
 */
export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  /** Hover: shadow-md + teal border (account quick-link cards). */
  interactive?: boolean;
  padding?: number | string;
  /** default = white card · low = surface-container-low · muted = surface-container info panel. */
  tone?: "default" | "low" | "muted";
  /** Use the 30%-alpha hairline (outline-variant/30) — account + directory cards. */
  soft?: boolean;
  style?: React.CSSProperties;
}
export function Card(props: CardProps): JSX.Element;
