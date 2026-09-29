import * as React from "react";

/**
 * Labeled text input with visible label, optional leading icon and error state.
 * @startingPoint section="Forms" subtitle="Text field with label & focus ring" viewport="700x160"
 */
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  hint?: string;
  error?: string;
  iconLeft?: React.ReactNode;
  style?: React.CSSProperties;
  wrapStyle?: React.CSSProperties;
}
export function Input(props: InputProps): React.JSX.Element;
