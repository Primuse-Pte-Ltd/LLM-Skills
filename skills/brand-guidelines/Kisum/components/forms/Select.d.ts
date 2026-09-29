import * as React from "react";

export type SelectOption = string | { value: string; label: string };

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  options?: SelectOption[];
  style?: React.CSSProperties;
  wrapStyle?: React.CSSProperties;
}
export function Select(props: SelectProps): JSX.Element;
