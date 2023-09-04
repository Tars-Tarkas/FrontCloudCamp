import { FC, ReactElement } from "react";
import { Button } from "../Button/Button";
import { useStepper } from "../../utils/hooks/useStepper";

export interface IStepperProps {
  children: ReactElement[];
}

export const Stepper: FC<IStepperProps> = ({ children }: IStepperProps) => {
  const { step, back, next } = useStepper([...children]);

  return <>{step}</>;
};
