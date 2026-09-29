import * as React from 'react';

/**
 * InputGroup — from @thestage/ui@0.1.0.
 */
export interface InputGroupProps {
  /** Allows getting a ref to the component instance. Once the component unmounts, React will set `ref.current` to `null` (or  */
  ref?: string | ((instance: HTMLDivElement) => void | DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | RefObject<HTMLDivElement>;
  className?: string;
  id?: string;
  style?: CSSProperties;
  children?: React.ReactNode;
}

export declare const InputGroup: React.ComponentType<InputGroupProps>;
