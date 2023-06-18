import { useState } from "react";

import { useAppSelector, useAppDispatch } from "store/store";
import { decrement, increment, selectCount } from "store/counterSlice";

import styles from "styles/Counter.module.css";

function AmountRocker() {
  const dispatch = useAppDispatch();
  const count = useAppSelector(selectCount);

  console.log("AmountRocker rendered");

  return (
    <div className={styles.row}>
      <button
        className={styles.button}
        aria-label="Decrement value"
        onClick={() => dispatch(decrement())}
      >
        -
      </button>
      <span className={styles.value}>{count}</span>
      <button
        className={styles.button}
        aria-label="Increment value"
        onClick={() => dispatch(increment())}
      >
        +
      </button>
    </div>
  );
}

export default AmountRocker;
