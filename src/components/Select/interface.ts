import { SelectHTMLAttributes } from "react";

export interface ISelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  name: string;
  error?: string;
  label?: string;
  children: JSX.Element | JSX.Element[];
}
