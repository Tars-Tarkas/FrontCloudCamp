import { FC, useState } from "react";
import styles from "./Stepper.module.css";

export interface IStepperProps {
  step?: 1 | 2 | 3;
}

export const Stepper: FC<IStepperProps> = ({ step }) => {
  const [activeStep, setActivStep] = useState();

  const steps = [{ label: 1 }, { label: 2 }, { label: 3 }];

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
