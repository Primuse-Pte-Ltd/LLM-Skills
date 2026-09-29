import * as React from "react";

/**
 * Marketplace / listing card — imagery header, metadata, action footer.
 * @startingPoint section="Data" subtitle="Marketplace listing card" viewport="420x560"
 */
export interface ArtistCardProps {
  name: string;
  location?: string;
  image?: string;
  agency?: string;
  statusLabel?: string;
  statusTone?: "success" | "warning" | "danger";
  window?: string;
  territory?: string;
  tags?: string[];
  badge?: string;
  saved?: boolean;
  onEnquiry?: () => void;
  onDetails?: () => void;
  style?: React.CSSProperties;
}
export function ArtistCard(props: ArtistCardProps): JSX.Element;
