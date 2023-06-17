import React, { useState } from "react";
import { CellContext } from "@tanstack/react-table";

function DefaultBodyCell(props: CellContext<unknown, any>) {
  const { getValue, children } = props;

  return <span>{children || getValue()}</span>;
}

export default DefaultBodyCell;
