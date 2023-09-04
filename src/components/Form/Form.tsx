import { FC, FormHTMLAttributes } from "react";
import styles from "./Form.module.css";
import { Stepper } from "../Stepper/Stepper";
import { Button } from "../Button/Button";
export interface IFormProps extends FormHTMLAttributes<HTMLFormElement> {
  children?: JSX.Element | JSX.Element[];
  paddingstyle?: "main" | "step";
}

export const Form: FC<IFormProps> = ({ children, ...rest }) => {
  return (
    <form {...rest} className={styles.form}>
      <Stepper>
        <h1>1</h1>
        <h1>2</h1>
        <h1>3</h1>
      </Stepper>
      {children}
      <div className={styles.btn_block}>
        <Button
          tag="Назад"
          theme="outline"
          type="button"
          // onClick={handelClickBack}
        />
        <Button tag="Далее" theme="primary" type="button" />
      </div>
    </form>
  );
};
