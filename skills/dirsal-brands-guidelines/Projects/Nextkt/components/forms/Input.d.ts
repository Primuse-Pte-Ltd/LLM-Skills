import * as React from "react";

/**
 * Labeled text field with leading icon and teal focus ring.
 * @startingPoint section="Forms" subtitle="Text field with caps label & focus ring" viewport="700x180"
 */
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** Rendered UPPERCASE (label-caps) above the field. */
  label?: string;
  hint?: string;
  /** Error message — red border, red ring, red helper text. */
  error?: string;
  /** Leading Material Symbol, e.g. <span className="ms">mail</span>. */
  icon?: React.ReactNode;
  style?: React.CSSProperties;
  inputStyle?: React.CSSProperties;
}
export function Input(props: InputProps): JSX.Element;
