import { FC, TextareaHTMLAttributes } from "react";
import styles from "./TextArea.module.css";

export interface ITextAre extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
  name: string;
}

export const TextArea: FC<ITextAre> = ({ label, error, name, ...rest }) => {
  return (
    <div>
      {label && <label className={styles.label}>{label}</label>}
      <textarea className={styles.textarea} {...rest} name={name} />
      {error && (
        <span role="alert" className={styles.error}>
          {error}
        </span>
      )}
    </div>
  );
};
