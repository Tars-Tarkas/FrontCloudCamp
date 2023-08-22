import { FC, SelectHTMLAttributes } from "react";
import styles from "./Select.module.css";

export interface ISelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  name: string;
  error?: string;
  label?: string;
  children: JSX.Element | JSX.Element[];
}

export const Select: FC<ISelectProps> = ({
  name,
  children,
  error,
  label,
  ...rest
}) => {
  return (
    <div className={styles.block}>
      {label && (
        <label htmlFor={name} className={styles.label}>
          {label}
        </label>
      )}
      <select name={name} {...rest} className={styles.select}>
        {children}
      </select>
      {error && (
        <span role="alert" className={styles.error}>
          {error}
        </span>
      )}
    </div>
  );
};
