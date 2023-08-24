import { FC, ButtonHTMLAttributes } from "react";
import styles from "./Button.module.css";

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  tag?: string;
  theme?: "primary" | "outline" | "delete" | "add" | "close";
}

const close = (
  <svg
    aria-hidden="true"
    focusable="false"
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    // viewBox="0 0 20 20"
  >
    <path
      d="M5.40385 4.6965C5.59911 4.50123 5.91569 4.50123 6.11095 4.6965L10.0002 8.5857L13.8892 4.69665C14.0845 4.50138 14.4011 4.50138 14.5963 4.69665L15.3034 5.40375C15.4987 5.59902 15.4987 5.9156 15.3034 6.11086L11.4144 9.99991L15.3033 13.8889C15.4986 14.0841 15.4986 14.4007 15.3033 14.596L14.5962 15.3031C14.401 15.4984 14.0844 15.4984 13.8891 15.3031L10.0002 11.4141L6.11103 15.3032C5.91577 15.4985 5.59919 15.4985 5.40393 15.3032L4.69682 14.5961C4.50156 14.4009 4.50156 14.0843 4.69682 13.889L8.58594 9.99991L4.69674 6.11071C4.50148 5.91545 4.50148 5.59886 4.69674 5.4036L5.40385 4.6965Z"
      fill="#B3B3B3"
    />
  </svg>
);

export const Button: FC<IButton> = (props: IButton) => {
  const { tag = "Начать", theme = "outline", ...rest } = props;

  return (
    <button
      {...rest}
      className={[styles[`button`], styles[`button-${theme}`]].join(" ")}
    >
      {tag}
      <svg>
        <use xlinkHref="icons/isons.svg#add"></use>
      </svg>
    </button>
  );
};
