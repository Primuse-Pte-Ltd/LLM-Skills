import * as React from 'react';

/**
 * InputOTP — from @thestage/ui@0.1.0.
 */
export interface InputOTPProps {
  style?: CSSProperties;
  className?: string;
  id?: string;
  children?: React.ReactNode;
  value?: string;
  maxLength: number;
  render?: (props: RenderProps) => ReactNode;
  textAlign?: "center" | "left" | "right";
  pushPasswordManagerStrategy?: "none" | "increase-width";
  pasteTransformer?: (pasted: string) => string;
  containerClassName?: string;
  noScriptCSSFallback?: string;
  /** Allows getting a ref to the component instance. Once the component unmounts, React will set `ref.current` to `null` (or  */
  ref?: string | ((instance: HTMLInputElement) => void | React.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof React.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | React.RefObject<HTMLInputElement>;
}

export declare const InputOTP: React.ComponentType<InputOTPProps>;
