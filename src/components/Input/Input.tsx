import { FC } from "react";
import { InputProps } from "./interface";
import styles from "./Input.module.css";

export const Input: FC<InputProps> = ({ name, error, label, ...rest }) => {
  return (
    <div className={styles.block}>
      {label && (
        <label htmlFor={name} className={styles.label}>
          {label}
        </label>
      )}
      <input
        aria-invalid={error ? "true" : "false"}
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
