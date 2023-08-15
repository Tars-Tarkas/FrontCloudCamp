import { ButtonHTMLAttributes } from "react";
export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  tag?: string;
  theme?: "primary" | "outline";
}
