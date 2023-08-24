import { FC, useEffect } from "react";
import styles from "./Modal.module.css";
import { Button } from "../Button/Button";

export interface IModalProps {
  visible?: boolean;
  content?: JSX.Element | JSX.Element[];
  onClose?: () => void;
}

export const Modal: FC<IModalProps> = ({
  visible,
  content,
  onClose,
}: IModalProps) => {
  const onKeydown = ({ key }: KeyboardEvent) => {
    switch (key) {
      case "Escape":
        // onClose();
        break;
    }
  };
  useEffect(() => {
    document.addEventListener("keydown", onKeydown);
    return () => document.removeEventListener("keydown", onKeydown);
  });

  if (!visible) return null;
  return (
    <div className={styles.modal}>
      <div className={styles.dialog}>{content}</div>
      <Button theme="close" />
    </div>
  );
};
