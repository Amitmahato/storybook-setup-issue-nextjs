"use client";

import { AgGridReact } from "ag-grid-react"; // React Grid Logic
import "ag-grid-community/styles/ag-grid.css"; // Core CSS
import "ag-grid-community/styles/ag-theme-quartz.css"; // Theme
import { FC, useState } from "react";
import { ColDef } from "ag-grid-community";
import * as moment from "moment";

export interface SomeInterface {
  title: string;
  createdAt: moment.Moment;
}

export const GridExample: FC<{
  editable?: boolean;
  hiddenColumns?: (keyof SomeInterface)[];
}> = ({ editable = false, hiddenColumns = [] }) => {
  const [rowData] = useState<SomeInterface[]>([
    {
      title: "Hello",
      createdAt: moment("2022-01-01 00:00:00", "YYYY-MM-DD HH:mm:ss"),
    },
    {
      title: "World",
      createdAt: moment("2022-01-02 00:00:00", "YYYY-MM-DD HH:mm:ss"),
    },
  ]);

  // Column Definitions: Defines & controls grid columns.
  const colDefs: ColDef<SomeInterface>[] = [
    { field: "title" },
    { field: "createdAt" },
  ].map((col) => ({
    ...col,
    editable: editable,
    hide: hiddenColumns.includes(col.field as keyof SomeInterface),
  }));

  return (
    <div className="ag-theme-quartz" style={{ height: 370, width: "60%" }}>
      <AgGridReact rowData={rowData} columnDefs={colDefs} />
    </div>
  );
};
