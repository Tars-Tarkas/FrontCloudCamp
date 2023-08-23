import { FC, ButtonHTMLAttributes } from "react";
import styles from "./Button.module.css";

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  tag?: string;
  theme?: "primary" | "outline" | "delete" | "add";
}

export const Button: FC<IButton> = (props: IButton) => {
  const { tag = "Начать", theme = "outline", ...rest } = props;

  return (
    <button
      {...rest}
      className={[styles[`button`], styles[`button-${theme}`]].join(" ")}
    >
      {tag}
    </button>
  );
};
