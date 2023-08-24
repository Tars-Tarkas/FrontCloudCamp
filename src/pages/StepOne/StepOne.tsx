import { FC } from "react";
import styles from "./StepOne.module.css";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import { Input } from "../../components/Input/Input";
import { Select } from "../../components/Select/Select";
import { Button } from "../../components/Button/Button";
import { Form } from "../../components/Form/Form";
import { Stepper } from "../../components/Stepper/Stepper";

export const StepOne: FC = () => {
  const nicknameRegExp = /^[а-яА-ЯёЁa-zA-Z0-9]+$/;
  const nameRegExp = /^[а-яА-Яa-zA-Z0-9]+$/;

  const validationScheme = yup.object().shape({
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

  const navigate = useNavigate();
  const {
    values,
    handleChange,
    handleBlur,
    handleSubmit,
    errors,
    isValidating,
  } = useFormik<{
    nickname: string;
    name: string;
    sername: string;
    sex: "man" | "women" | "Не выбрано";
  }>({
    initialValues: { nickname: "1", name: "", sername: "", sex: "Не выбрано" },
    validationSchema: validationScheme,
    onSubmit: (values, { setFieldValue }) => {
      if (!isValidating) {
        navigate("/steptwo");
      }
    },
  });

  const handelClickBack = () => {
    navigate("/");
  };
  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit(e);
      }}
    >
      <Stepper />
      <Input
        type="nickname"
        name="nickname"
        label="Nickname"
        value={values.nickname}
        onChange={handleChange}
        onBlur={handleBlur}
        error={errors.nickname}
      />
      <Input
        type="name"
        name="name"
        label="Name"
        value={values.name}
        onChange={handleChange}
        onBlur={handleBlur}
        error={errors.name}
      />
      <Input
        type="sername"
        name="sername"
        label="Sername"
        value={values.sername}
        onChange={handleChange}
        onBlur={handleBlur}
        error={errors.sername}
      />
      <Select
        name="sex"
        label="Sex"
        error={errors.sex}
        defaultValue={"Не выбрано"}
        onChange={handleChange}
        onBlur={handleBlur}
      >
        <option disabled>Не выбрано</option>
        <option value="man">Man</option>
        <option value="woman">Woman</option>
      </Select>
      <div className={styles.btn_block}>
        <Button
          tag="Назад"
          theme="outline"
          type="button"
          onClick={handelClickBack}
        />
        <Button tag="Далее" theme="primary" />
      </div>
    </Form>
  );
};
