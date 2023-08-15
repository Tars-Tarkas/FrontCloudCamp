import { FormHTMLAttributes } from "react";
export interface IFormProps extends FormHTMLAttributes<HTMLFormElement> {
  children: JSX.Element | JSX.Element[];
  paddingstyle?: "main" | "step";
}
