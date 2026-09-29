import * as React from "react";

/**
 * Flat content container with border at rest and optional hover lift.
 * @startingPoint section="Core" subtitle="Surface card + hover lift" viewport="700x220"
 */
export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  /** Enable hover lift + shadow (use for clickable cards). */
  interactive?: boolean;
  padding?: number;
  style?: React.CSSProperties;
}
export function Card(props: CardProps): JSX.Element;
