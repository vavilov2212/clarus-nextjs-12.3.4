import React from "react";
import {
  flexRender,
  useReactTable,
  getCoreRowModel,
  ColumnDef,
} from "@tanstack/react-table";
import {
  TableHeaderRow,
  TableHeaderCell,
  TableBodyRow,
  TableBodyCell,
} from "./child";
import { DefaultBodyCell } from "./CellDataTypes";

import styles from "./Table.module.css";

type IColumn<T> = ColumnDef<T, any>;
type IData<T> = Array<T>;

interface ITableProps {
  columns: IColumn<any>[];
  data: IData<unknown>;
}

function Table(props: ITableProps) {
  const { data, columns } = props;

  const defaultColumn = {
    cell: DefaultBodyCell,
  };

  const table = useReactTable({
    defaultColumn,
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className={styles.tableContainer}>
      <table className={styles.table}>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableHeaderRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <TableHeaderCell key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </TableHeaderCell>
              ))}
            </TableHeaderRow>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <TableBodyRow key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <TableBodyCell key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </TableBodyCell>
              ))}
            </TableBodyRow>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
