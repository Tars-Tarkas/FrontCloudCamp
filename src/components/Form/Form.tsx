import { FC, FormHTMLAttributes } from "react";
import styles from "./Form.module.css";
export interface IFormProps extends FormHTMLAttributes<HTMLFormElement> {
  children?: JSX.Element | JSX.Element[];
  paddingstyle?: "main" | "step";
}

export const Form: FC<IFormProps> = ({ children, ...rest }) => {
  return (
    <form {...rest} className={styles.form}>
      {children}
    </form>
  );
};
