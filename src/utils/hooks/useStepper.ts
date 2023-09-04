import { useState, ReactElement } from "react";

export const useStepper = (steps: ReactElement[]) => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  const next = () => {
    setCurrentStepIndex((i: number) => {
      if (i >= steps.length - 1) return i;
      return i + 1;
    });
  };

  const back = () => {
    setCurrentStepIndex((i: number) => {
      if (i <= 0) return i;
      return i - 1;
    });
  };

  return {
    step: steps[currentStepIndex],
    steps,
    next,
    back,
  };
};
