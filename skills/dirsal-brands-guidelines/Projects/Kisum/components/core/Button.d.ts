import * as React from "react";

/**
 * Kisum primary action button.
 * @startingPoint section="Core" subtitle="Button variants & sizes" viewport="700x180"
 */
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  /** Visual style. Default "primary" (purple fill). */
  variant?: "primary" | "outline" | "secondary" | "ghost" | "destructive";
  size?: "sm" | "md" | "lg";
  /** Fully rounded pill — use for branded kisum CTAs. */
  pill?: boolean;
  full?: boolean;
  disabled?: boolean;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  style?: React.CSSProperties;
}
export function Button(props: ButtonProps): React.JSX.Element;
