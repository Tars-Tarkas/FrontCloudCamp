import { FC } from "react";
import styles from "./Form.module.css";
import { IFormProps } from "./interface";

export const Form: FC<IFormProps> = ({
  children,
  paddingstyle,
}: IFormProps) => {
  return (
    <form
      className={[styles[`form`], styles[`form-${paddingstyle}`]].join(" ")}
    >
      {children}
    </form>
  );
};
