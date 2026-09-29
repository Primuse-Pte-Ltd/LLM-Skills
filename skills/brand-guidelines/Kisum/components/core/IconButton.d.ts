import * as React from "react";

export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  size?: number;
  variant?: "ghost" | "tint" | "solid";
  label?: string;
  style?: React.CSSProperties;
}
export function IconButton(props: IconButtonProps): JSX.Element;
