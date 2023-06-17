import React, { useState } from "react";
import { HeaderContext, flexRender } from "@tanstack/react-table";

// function DefaultHeaderCell(props: HeaderContext<unknown, any>) {
function DefaultHeaderCell(props: any) {
  const { children } = props;

  return <span>{children}</span>;
}

export default DefaultHeaderCell;
