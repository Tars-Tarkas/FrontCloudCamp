import { FC, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { Button } from "../../components/Button/Button";
import { StepOne } from "../../components/StepOne/StepOne";
import { StepTwo } from "../../components/StepTwo/StepTwo";
import { StepThree } from "../../components/StepThree/StepThree";
import { yupResolver } from "@hookform/resolvers/yup";
import styles from "./MultiStepForm.module.css";
import { validationSchema } from "./validationSchema";

function getStepContent(step: number) {
  switch (step) {
    case 0:
      return <StepOne />;
    case 1:
      return <StepTwo />;
    case 2:
      return <StepThree />;
    case 3:
    default:
      return "Unknown step";
  }
}

export interface IValue {
  nickname: string;
  name: string;
  sername: string;
  sex: string;
  about: string;
}

const defaultValues: IValue = {
  nickname: "",
  name: "",
  sername: "",
  sex: "",
  about: "",
};
export const MultiStepForm: FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const steps = ["StepOne", "StepTwo", "StepThree"];

  const onSubmit = (data: any) => {
    console.log(JSON.stringify(data));
    alert(JSON.stringify(data));
    handleNext();
  };

  const currentValidationSchema = validationSchema[activeStep];

  const methods = useForm<IValue>({
    defaultValues,
    resolver: yupResolver(currentValidationSchema),
    mode: "all",
  });
  const { handleSubmit, trigger, formState } = methods;

  const handleNext = async () => {
    const isStepValid = await trigger();
    if (isStepValid) setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  console.log(activeStep);

  return (
    <>
      <FormProvider {...methods}>
        <form className={styles.form}>
          <div>{getStepContent(activeStep)}</div>
          <div className={styles.btn_block}>
            <Button
              disabled={activeStep === 0}
              tag="Назад"
              theme="outline"
              type="button"
              onClick={handleBack}
            />
            {activeStep === steps.length - 1 ? (
              <Button onClick={handleSubmit(onSubmit)}>Отправить</Button>
            ) : (
              <Button
                onClick={handleNext}
                disabled={!formState.isValid}
                theme="primary"
              >
                Далее
              </Button>
            )}
          </div>
        </form>
      </FormProvider>
    </>
  );
};
