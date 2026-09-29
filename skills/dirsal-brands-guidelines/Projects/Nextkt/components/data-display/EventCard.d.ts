import * as React from "react";

/**
 * Storefront event card — featured / discovery / directory / poster.
 * @startingPoint section="Data" subtitle="Event card — four storefront treatments" viewport="700x460"
 */
export interface EventCardProps {
  variant?: "featured" | "discovery" | "directory" | "poster";
  title: string;
  /** Image URL or a CSS gradient placeholder string. */
  image?: string;
  /** Status badge text over the image (featured / poster). Default "On Sale". */
  badge?: string;
  badgeTone?: "on-sale" | "primary" | "vip" | "sold-out";
  /** Teal caps line above the title, e.g. "OCT 24 • JAKARTA". */
  eyebrow?: string;
  /** Two-line summary (featured only). */
  summary?: string;
  venue?: string;
  city?: string;
  /** Pre-formatted, e.g. "From SG$ 128.00" (lib/format fromPrice). */
  price?: string;
  month?: string;
  day?: string;
  /** Stock chip text (discovery). */
  stock?: string;
  /** Footer CTA label. Default "Book Now". */
  cta?: string;
  onClick?: () => void;
  style?: React.CSSProperties;
}
export function EventCard(props: EventCardProps): React.JSX.Element;
