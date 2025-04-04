import React, { useMemo } from "react";

import {
  TableBody,
  TableCell,
  TableRow,
  Table,
  TableHeader,
  TableHeaderCell,
  TableSelectionCell,
  TableCellLayout,
  useTableFeatures,
  TableColumnDefinition,
  useTableSelection,
  createTableColumn,
} from "@fluentui/react-components";

interface TableItem {
  column: string;
  data: string;
}

const items = [
  { column: "Column 1", data: "Data 1" },
  { column: "Column 2", data: "Data 2" },
  { column: "Column 3", data: "Data 3" },
];

const columns: TableColumnDefinition<TableItem>[] = [
  createTableColumn<TableItem>({
    columnId: "column",
  }),
  createTableColumn<TableItem>({
    columnId: "data",
  }),
];

const DataTable = () => {
  const {
    getRows,
    selection: { allRowsSelected, someRowsSelected, toggleAllRows, toggleRow, isRowSelected },
  } = useTableFeatures(
    {
      columns,
      items,
    },
    [
      useTableSelection({
        selectionMode: "multiselect",
        defaultSelectedItems: [],
      }),
    ]
  );

  const rows = getRows((row) => {
    const selected = isRowSelected(row.rowId);
    return {
      ...row,
      onClick: (e: React.MouseEvent) => toggleRow(e, row.rowId),
      onKeyDown: (e: React.KeyboardEvent) => {
        if (e.key === " ") {
          e.preventDefault();
          toggleRow(e, row.rowId);
        }
      },
      selected,
      appearance: selected ? ("brand" as const) : ("none" as const),
    };
  });

  const toggleAllKeydown = React.useCallback(
    (e: React.KeyboardEvent<HTMLDivElement>) => {
      if (e.key === " ") {
        toggleAllRows(e);
        e.preventDefault();
      }
    },
    [toggleAllRows]
  );

  return (
    <Table aria-label="Updated data table">
      <TableHeader>
        <TableRow>
          <TableSelectionCell
            checked={allRowsSelected ? true : someRowsSelected ? "mixed" : false}
            onClick={toggleAllRows}
            onKeyDown={toggleAllKeydown}
            checkboxIndicator={{ "aria-label": "Select all rows " }}
          />
          <TableHeaderCell>Column</TableHeaderCell>
          <TableHeaderCell>Value</TableHeaderCell>
        </TableRow>
      </TableHeader>

      <TableBody>
        {rows.map((row, index) => (
          <TableRow key={row.item.column + index} {...row} aria-selected={row.selected}>
            <TableSelectionCell
              checked={row.selected}
              checkboxIndicator={{ "aria-label": "Select row" }}
            />
            <TableCell>
              <TableCellLayout>{row.item.column}</TableCellLayout>
            </TableCell>
            <TableCell>
              <TableCellLayout>{row.item.data}</TableCellLayout>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default DataTable;
