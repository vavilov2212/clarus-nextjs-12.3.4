import React, { useState } from "react";

import styles from "./Row.module.css";

interface IRowProps {
  children: JSX.Element | JSX.Element[];
}

function Row(props: IRowProps) {
  const { children } = props;

  return <tr className={styles.bodyRow}>{children}</tr>;
}

export default Row;
