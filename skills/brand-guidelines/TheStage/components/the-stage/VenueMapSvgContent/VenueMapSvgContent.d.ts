import * as React from 'react';

/**
 * VenueMapSvgContent — from @thestage/ui@0.1.0.
 */
export interface VenueMapSvgContentProps {
  /** Raw SVG document XML from fetch / server action */
  svgMarkup: string;
  /** Inventory map labels to bind (e.g. R1, L2) */
  labels: string[];
  activeLabel?: string;
  onSelectLabel: (label: string) => void;
  /** Fires with the hovered label + its viewport center; `null` on mouseleave. */
  onHoverLabel?: (label: string | null, info?: VenueMapHoverInfo) => void;
  /** Labels (uppercase) that are sold out — rendered with a red SOLD OUT banner, dimmed, and no click/hover handlers attached */
  soldOutLabels?: string[];
  className?: string;
}

export declare const VenueMapSvgContent: React.ComponentType<VenueMapSvgContentProps>;
