import React, { useState } from "react";

import styles from "./Cell.module.css";

interface ICellProps {
  children: React.ReactNode | React.ReactNode[];
}

function Cell(props: ICellProps) {
  const { children } = props;

  return <th className={styles.headerCell}>{children}</th>;
}

export default Cell;
