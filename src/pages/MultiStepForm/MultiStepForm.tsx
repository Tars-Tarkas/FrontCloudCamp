import { FC, useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { FormProvider, useForm } from "react-hook-form";
import { Button } from "../../components/Button/Button";
import { StepOne } from "../../components/StepOne/StepOne";
import { yupResolver } from "@hookform/resolvers/yup";

function getStepContent(step: any) {
  switch (step) {
    case 0:
      return <StepOne />;
    // case 1:
    //   return <Step2 />;
    // case 2:
    //   return <Step3 />;
    case 3:
    default:
      return "Unknown step";
  }
}
const nicknameRegExp = /^[а-яА-ЯёЁa-zA-Z0-9]+$/;
const nameRegExp = /^[а-яА-Яa-zA-Z0-9]+$/;

const validationSchema: any = yup.object().shape({
  nickname: yup
    .string()
    .max(30)
    .matches(
      nicknameRegExp,
      "Некорректно заполнен, только буквы и цифры, макс. длина 30 символов"
    )
    .required("Введите никнайм"),
  name: yup
    .string()
    .max(50)
    .matches(
      nameRegExp,
      "Некорректно заполнен, только буквы, макс. длина 50 символов"
    )
    .required("Введите имя"),
  sername: yup
    .string()
    .max(50)
    .matches(
      nameRegExp,
      "Некорректно заполнен, только буквы, макс. длина 50 символов"
    )
    .required("Введите имя пользователя"),
  sex: yup
    .string()
    .oneOf(["man", "woman"], "Не выбран пол")
    .required("Выберите пол"),
});

export interface IValue {
  nickname: string;
  name: string;
  sername: string;
  sex: string;
}

const defaultValues: IValue = {
  nickname: "",
  name: "",
  sername: "",
  sex: "",
};
export const MultiStepForm: FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const steps = ["StepOne", "StepTwo", "StepThree"];

  const onSubmit = (data: any) => {
    console.log(JSON.stringify(data));
    alert(JSON.stringify(data));
    // handleNext();
  };

  const currentValidationSchema = validationSchema[activeStep];

  const methods = useForm<IValue>({
    // shouldUnregister: false,
    defaultValues,
    resolver: yupResolver(currentValidationSchema),
    mode: "all",
  });
  const { handleSubmit, reset, trigger, formState } = methods;

  const handleNext = async () => {
    const isStepValid = await trigger();
    if (isStepValid) setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  return (
    <>
      <FormProvider {...methods}>
        <form>
          <div>{getStepContent(activeStep)}</div>
          <div>
            <Button
              tag="Назад"
              theme="outline"
              type="button"
              onClick={handleBack}
            />
            {activeStep === steps.length - 1 ? (
              <Button onClick={handleSubmit(onSubmit)}>Отправить</Button>
            ) : (
              <Button onClick={handleNext} disabled={!formState.isValid}>
                Далее
              </Button>
            )}
          </div>
        </form>
      </FormProvider>
    </>
  );
};
