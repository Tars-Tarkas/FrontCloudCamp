import { FC } from "react";
import { Layout } from "../../components/Layout/Layout";
import { Form } from "../../components/Form/Form";
import { Header } from "../../components/Header/Header";
import * as yup from "yup";
import { Formik, FormikHelpers, ErrorMessage, FormikProps } from "formik";
import { Input } from "../../components/Input/Input";
import { IMainInput } from "./interface";
import { Button } from "../../components/Button/Button";

const EmailSchema = yup.object().shape({
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string()
    .max(32, "Max password length is 32")
    .required("Password is required"),
});

export const Main: FC<{}> = (props: FormikProps<IMainInput>) => {
  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting,
  } = props;

  const initialValues: IMainInput = { phone: "", email: "" };

  return (
    <Layout>
      <Formik
        initialValues={initialValues}
        validationSchema={EmailSchema}
        onSubmit={(
          values: IMainInput,
          { setSubmitting }: FormikHelpers<IMainInput>
        ) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 500);
        }}
      >
        <Form paddingstyle="main" onSubmit={handleSubmit}>
          <Header />
          <Input
            name="email"
            label="Номер телефона"
            placeholder="+7 999 999-99-99"
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <ErrorMessage name="email" component="div" />
          <Button tag="Начать" theme="primary" />
        </Form>
      </Formik>
    </Layout>
  );
};
