import { FC } from "react";
import { IButton } from "./interface";
import styles from "./Button.module.css";

export const Button: FC<IButton> = (props: IButton) => {
  const { tag = "Начать", theme = "outline" } = props;

  return (
    <button className={[styles[`button`], styles[`button-${theme}`]].join(" ")}>
      {tag}
    </button>
  );
};
