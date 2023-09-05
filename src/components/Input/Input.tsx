import { FC, InputHTMLAttributes } from "react";
import styles from "./Input.module.css";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  type: string;
  name?: string;
  label?: string;
  error?: string;
}

export const Input: FC<InputProps> = ({
  type,
  name,
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
      <input
        aria-invalid={error ? "true" : "false"}
        type={name}
        name={name}
        {...rest}
        className={styles.input}
      />
      {error && (
        <span role="alert" className={styles.error}>
          {error}
        </span>
      )}
    </div>
  );
};
