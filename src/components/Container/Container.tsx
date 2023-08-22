import { FC } from "react";
import styles from "./Container.module.css";

export interface IContainerProps {
  children: JSX.Element | JSX.Element[];
}

export const Container: FC<IContainerProps> = ({
  children,
}: IContainerProps) => {
  return <div className={styles.container}>{children}</div>;
};
