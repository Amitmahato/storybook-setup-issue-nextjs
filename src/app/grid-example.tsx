"use client";

import { AgGridReact } from "ag-grid-react"; // React Grid Logic
import "ag-grid-community/styles/ag-grid.css"; // Core CSS
import "ag-grid-community/styles/ag-theme-quartz.css"; // Theme
import { FC, useState } from "react";
import { ColDef, ICellRendererParams } from "ag-grid-community";

type Data = {
  make: string;
  model: string;
  price: number;
  electric: boolean;
};

export const GridExample: FC<{
  editable?: boolean;
  hiddenColumns?: (keyof Data)[];
}> = ({ editable = false, hiddenColumns = [] }) => {
  // Row Data: The data to be displayed.
  const [rowData, setRowData] = useState<Data[]>([
    { make: "Tesla", model: "Model Y", price: 64950, electric: true },
    { make: "Ford", model: "F-Series", price: 33850, electric: false },
    { make: "Toyota", model: "Corolla", price: 29600, electric: false },
    { make: "Honda", model: "Accord", price: 29850, electric: true },
    { make: "Tesla", model: "Model 3", price: 39950, electric: true },
    { make: "Nissan", model: "Altima", price: 31950, electric: true },
    { make: "Ford", model: "F-Series", price: 33850, electric: false },
    { make: "Toyota", model: "Corolla", price: 29600, electric: false },
    { make: "Honda", model: "Accord", price: 29850, electric: true },
    { make: "Tesla", model: "Model 3", price: 39950, electric: true },
  ]);

  // Column Definitions: Defines & controls grid columns.
  const colDefs: ColDef<Data>[] = [
    { field: "make" },
    { field: "model" },
    {
      field: "price",
      cellRenderer: ({ value }: ICellRendererParams) =>
        `$${Number(value)?.toLocaleString()}`,
    },
    {
      field: "electric",
      editable: editable,
    },
  ].map(
    (colDef) =>
      ({
        ...colDef,
        hide: hiddenColumns.includes(colDef.field as keyof Data),
      } as ColDef<Data>)
  );

  return (
    <div className="ag-theme-quartz" style={{ height: 370, width: "60%" }}>
      <AgGridReact rowData={rowData} columnDefs={colDefs} />
    </div>
  );
};
