import { FC } from "react";
import styles from "./Select.module.css";
import { ISelectProps } from "./interface";

export const Select: FC<ISelectProps> = ({
  name,
  children,
  error,
  label,
  ...rest
}) => {
  return (
    <div>
      {label && <label htmlFor={name}>{label}</label>}
      <select name={name} {...rest}>
        {children}
      </select>
      {error && <span role="alert">{error}</span>}
    </div>
  );
};
