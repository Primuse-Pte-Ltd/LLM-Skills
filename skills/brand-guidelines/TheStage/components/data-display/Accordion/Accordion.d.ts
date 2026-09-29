import * as React from 'react';

/**
 * Accordion — from @thestage/ui@0.1.0.
 */
export interface AccordionProps {
  type: "multiple" | "single";
  /** The controlled stateful value of the accordion item whose content is expanded. */
  value?: string | string[];
  /** The value of the item whose content is expanded when the accordion is initially rendered. Use `defaultValue` if you do n */
  defaultValue?: string | string[];
  /** Whether or not an accordion is disabled from user interaction. */
  disabled?: boolean;
  /** The layout in which the Accordion operates. */
  orientation?: "horizontal" | "vertical";
  /** The language read direction. */
  dir?: "ltr" | "rtl";
  style?: CSSProperties;
  className?: string;
  id?: string;
  children?: React.ReactNode;
  asChild?: boolean;
  /** Allows getting a ref to the component instance. Once the component unmounts, React will set `ref.current` to `null` (or  */
  ref?: string | ((instance: HTMLDivElement) => void | React.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof React.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | React.RefObject<HTMLDivElement>;
}

export declare const Accordion: React.ComponentType<AccordionProps>;
