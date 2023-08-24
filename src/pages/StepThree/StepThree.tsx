import { FC } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import styles from "./StepThree.module.css";
import { Form } from "../../components/Form/Form";
import { Stepper } from "../../components/Stepper/Stepper";
import { TextArea } from "../../components/TextArea/TextArea";
import { Button } from "../../components/Button/Button";
import { Modal } from "../../components/Modal/Modal";

export const StepThree: FC = () => {
  const validationScheme = yup.object().shape({
    about: yup.string().max(200).required("Не заполнено поле о себе"),
  });

  const {
    values,
    handleChange,
    handleBlur,
    handleSubmit,
    errors,
    isValidating,
  } = useFormik<{
    about: string;
  }>({
    initialValues: { about: "111" },
    validationSchema: validationScheme,
    onSubmit: (values, { setFieldValue }) => {
      if (!isValidating) {
        // navigate("/steptwo");
      }
    },
  });
  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit(e);
      }}
    >
      <Stepper />
      <TextArea
        name="about"
        label="About"
        placeholder="Placeholder"
        error={errors.about}
        defaultValue={values.about}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <div className={styles.btn_block}>
        <Button tag="Назад" theme="outline" type="button" />
        <Button tag="Отправить" theme="primary" type="submit" />
      </div>
      <Modal />
    </Form>
  );
};
