import * as React from "react";

/**
 * GA ticket tier row with quantity stepper.
 * @startingPoint section="Data" subtitle="Ticket tier + quantity stepper" viewport="700x200"
 */
export interface TicketTierProps {
  /** Caps tier chip text, e.g. "GA", "VIP", "TABLES" (the inventory map_label). */
  badge: string;
  /** Seating-tier color. */
  tone?: "ga" | "vip" | "tables";
  /** Used in the stepper aria-labels. */
  name?: string;
  /** Pre-formatted face price, e.g. "SG$ 128.00". */
  price: string;
  subtitle?: string;
  available?: number;
  soldOut?: boolean;
  qty?: number;
  max?: number;
  onChange?: (qty: number) => void;
  style?: React.CSSProperties;
}
export function TicketTier(props: TicketTierProps): React.JSX.Element;
