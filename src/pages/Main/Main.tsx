import { FC } from "react";
import { useFormik } from "formik";
import { validationScheme } from "./ypu.sheme";
import { Layout } from "../../components/Layout/Layout";
import { Form } from "../../components/Form/Form";
import { Header } from "../../components/Header/Header";
import { Input } from "../../components/Input/Input";
import { Button } from "../../components/Button/Button";

export const Main: FC = () => {
  const { values, handleChange, handleBlur, handleSubmit, errors } = useFormik<{
    phone: string;
    email: string;
  }>({
    initialValues: { phone: "", email: "" },
    validationSchema: validationScheme,
    onSubmit: (values) => {},
  });

  return (
    <Layout>
      <Form paddingstyle="main" onSubmit={handleSubmit} autoComplete="off">
        <Header />
        <Input
          name="phone"
          label="Номер телефона"
          placeholder="+7 999 999-99-99"
          value={values.phone}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.phone}
        />
        <Input
          name="email"
          label="Email"
          placeholder="tim.jennings@example.com"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.email}
        />
        <Button tag="Начать" theme="primary" />
      </Form>
    </Layout>
  );
};
