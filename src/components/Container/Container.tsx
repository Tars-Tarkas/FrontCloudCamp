import { FC } from "react";
import styles from "./Container.module.css";
import { IContainerProps } from "./interface";

export const Container: FC<IContainerProps> = ({
  children,
}: IContainerProps) => {
  return <div className={styles.container}>{children}</div>;
};
