import { FC, InputHTMLAttributes } from "react";
import styles from "./Input.module.css";
import { useFormContext, useController } from "react-hook-form";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
  error?: string;
}

export const Input: FC<InputProps> = ({ name, error, label, ...props }) => {
  const { register, formState } = useFormContext();

  return (
    <div className={styles.block}>
      {label && (
        <label htmlFor={name} className={styles.label}>
          {label}
          <input
            {...register(name)}
            aria-invalid={error ? "true" : "false"}
            // name={name}
            {...props}
            className={styles.input}
          />
        </label>
      )}

      {error && (
        <span role="alert" className={styles.error}>
          {error}
        </span>
      )}
    </div>
  );
};
