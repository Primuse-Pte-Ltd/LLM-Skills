import * as React from 'react';

/**
 * Textarea — from @thestage/ui@0.1.0.
 * @replaces textarea
 */
export interface TextareaProps {
  style?: CSSProperties;
  className?: string;
  id?: string;
  children?: React.ReactNode;
  /** Allows getting a ref to the component instance. Once the component unmounts, React will set `ref.current` to `null` (or  */
  ref?: string | ((instance: HTMLTextAreaElement) => void | React.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof React.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | React.RefObject<HTMLTextAreaElement>;
}

export declare const Textarea: React.ComponentType<TextareaProps>;
