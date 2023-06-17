import React, { useState } from 'react';
import { CellContext } from '@tanstack/react-table';
import { DefaultBodyCell } from './';

function TimeStamp(props: CellContext<any, any>) {
  const { getValue } = props;

  const date = new Date(getValue()).toLocaleString('ru');
  console.log('date', date);

  return <DefaultBodyCell {...props}>{date}</DefaultBodyCell>;
}

export default TimeStamp;
