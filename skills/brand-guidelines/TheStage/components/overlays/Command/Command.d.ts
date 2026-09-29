import * as React from 'react';

/**
 * Command — from @thestage/ui@0.1.0.
 */
export interface CommandProps {
  /** Accessible label for this command menu. Not shown visibly. */
  label?: string;
  style?: React.CSSProperties;
  /** Custom filter function for whether each command menu item should matches the given search query. It should return a numb */
  filter?: (value: string, search: string, keywords?: string[]) => number;
  className?: string;
  id?: string;
  children?: React.ReactNode;
  asChild?: boolean;
  /** Optional controlled state of the selected command menu item. */
  value?: string;
  /** Optionally set to `true` to turn on looping around when using the arrow keys. */
  loop?: boolean;
  /** Optionally set to `false` to turn off the automatic filtering and sorting. If `false`, you must conditionally render val */
  shouldFilter?: boolean;
  /** Optionally set to `true` to disable selection via pointer events. */
  disablePointerSelection?: boolean;
  /** Set to `false` to disable ctrl+n/j/p/k shortcuts. Defaults to `true`. */
  vimBindings?: boolean;
  /** Allows getting a ref to the component instance. Once the component unmounts, React will set `ref.current` to `null` (or  */
  ref?: string | ((instance: HTMLDivElement) => void | React.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof React.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | React.RefObject<HTMLDivElement>;
}

export declare const Command: React.ComponentType<CommandProps>;
