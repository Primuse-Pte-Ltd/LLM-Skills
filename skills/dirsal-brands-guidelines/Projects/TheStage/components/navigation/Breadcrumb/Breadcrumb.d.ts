import * as React from 'react';

/**
 * Breadcrumb — from @thestage/ui@0.1.0.
 */
export interface BreadcrumbProps {
  style?: CSSProperties;
  className?: string;
  id?: string;
  children?: React.ReactNode;
  separator?: React.ReactNode;
  /** Allows getting a ref to the component instance. Once the component unmounts, React will set `ref.current` to `null` (or  */
  ref?: string | ((instance: HTMLElement) => void | React.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof React.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | React.RefObject<HTMLElement>;
}

export declare const Breadcrumb: React.ComponentType<BreadcrumbProps>;
