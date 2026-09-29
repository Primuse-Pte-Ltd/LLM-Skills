import * as React from 'react';

/**
 * ChartContainer — from @thestage/ui@0.1.0.
 */
export interface ChartContainerProps {
  style?: CSSProperties;
  className?: string;
  id?: string;
  children: unknown;
  config: ChartConfig;
  /** Allows getting a ref to the component instance. Once the component unmounts, React will set `ref.current` to `null` (or  */
  ref?: string | ((instance: HTMLDivElement) => void | React.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof React.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | React.RefObject<HTMLDivElement>;
}

export declare const ChartContainer: React.ComponentType<ChartContainerProps>;
