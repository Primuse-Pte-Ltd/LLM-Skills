import * as React from "react";

/**
 * Nextkt action button.
 * @startingPoint section="Core" subtitle="Button variants & sizes" viewport="700x200"
 */
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  /** Visual style. Default "primary" (teal fill, steel-blue hover). */
  variant?: "primary" | "container" | "outline" | "secondary" | "inverse" | "glass" | "link" | "destructive";
  /** "cta" = 60px Add-to-Cart bar with headline-md label. */
  size?: "sm" | "md" | "lg" | "cta";
  full?: boolean;
  disabled?: boolean;
  /** Usually a Material Symbols glyph: <span className="ms">confirmation_number</span> */
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  style?: React.CSSProperties;
}
export function Button(props: ButtonProps): React.JSX.Element;
