import { FC } from "react";
import { IButton } from "./interface";
import styles from "./Button.module.css";

export const Button: FC<IButton> = (props: IButton) => {
  const { tag = "Начать", theme = "outline", handleCkick, isDisabled } = props;

  return (
    <button
      type="submit"
      onClick={handleCkick}
      disabled={isDisabled}
      className={[styles[`button`], styles[`button-${theme}`]].join(" ")}
    >
      {tag}
    </button>
  );
};
