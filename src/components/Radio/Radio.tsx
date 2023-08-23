import { FC, InputHTMLAttributes } from "react";
import styles from "./Radio.module.css";

export interface IRadio extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export const Radio: FC<IRadio> = ({ label, ...rest }: IRadio) => {
  return (
    <div className={styles.block}>
      <input type="radio" {...rest} className={styles.radio} />
      <label className={styles.label}>{label}</label>
    </div>
  );
};
