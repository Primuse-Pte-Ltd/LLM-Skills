import * as React from "react";

export interface DataTableColumn {
  key: string;
  label: string;
  align?: "left" | "right" | "center";
  render?: (row: any) => React.ReactNode;
}

/**
 * High-density data table.
 * @startingPoint section="Data" subtitle="Dense data table" viewport="700x260"
 */
export interface DataTableProps {
  columns: DataTableColumn[];
  rows: any[];
  rowKey?: string;
  onRowClick?: (row: any) => void;
  style?: React.CSSProperties;
}
export function DataTable(props: DataTableProps): React.JSX.Element;
