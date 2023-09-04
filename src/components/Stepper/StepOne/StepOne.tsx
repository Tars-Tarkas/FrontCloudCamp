import { FC } from "react";
import styles from "./StepOne.module.css";

export const StepOne: FC = () => {
  return (
    <div className={styles.block}>
      <div className={styles.inner}>
        <div className={styles.item}>
          <span></span>
          <label className={styles.label__inactive}>1</label>
        </div>
        <div className={styles.item}>
          <span className={styles.step__inactive}></span>
          <label className={styles.label__inactive}>2</label>
        </div>
        <div className={styles.item}>
          <span className={styles.step__inactive}></span>
          <label className={styles.label__inactive}>3</label>
        </div>
      </div>
      <div className={styles.line__inactive}></div>
      <div className={styles.line__active}></div>
    </div>
  );
};
