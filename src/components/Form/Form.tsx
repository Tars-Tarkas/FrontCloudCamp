import { FC } from "react";
import styles from "./Form.module.css";
import { IFormProps } from "./interface";

export const Form: FC<IFormProps> = ({
  children,
  paddingstyle,
  handleSubmit,
}: IFormProps) => {
  return (
    <form
      onSubmit={handleSubmit}
      className={[styles[`form`], styles[`form-${paddingstyle}`]].join(" ")}
    >
      {children}
    </form>
  );
};
