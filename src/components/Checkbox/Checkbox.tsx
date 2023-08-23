import { FC, InputHTMLAttributes } from "react";
import styles from "./Checkbox.module.css";

export interface IChekbox extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export const Checkbox: FC<IChekbox> = ({ label, ...rest }: IChekbox) => {
  return (
    <div className={styles.block}>
      <input type="checkbox" {...rest} className={styles.checkbox} />
      <label className={styles.label}>{label}</label>
    </div>
  );
};
