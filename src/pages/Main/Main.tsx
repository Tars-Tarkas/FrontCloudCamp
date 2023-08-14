import { FC } from "react";
import * as yup from "yup";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { Layout } from "../../components/Layout/Layout";
import { Form } from "../../components/Form/Form";
import { Header } from "../../components/Header/Header";
import { Input } from "../../components/Input/Input";
import { Button } from "../../components/Button/Button";

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const validationScheme = yup.object().shape({
  phone: yup
    .string()
    .matches(phoneRegExp, "Некорректно заполнен номер телефона")
    .required("Введите номер телефона"),
  email: yup
    .string()
    .email("Некорректно заполнен адрес электронной почты")
    .required("Введите адрес электронно почты"),
});

export const Main: FC = () => {
  const navigate = useNavigate();

  const { values, handleChange, handleBlur, handleSubmit, errors } = useFormik<{
    phone: string;
    email: string;
  }>({
    initialValues: { phone: "", email: "" },
    validationSchema: validationScheme,
    onSubmit: (values) => {},
  });

  // console.log(isValidating);

  return (
    <Layout>
      <Form paddingstyle="main" handleSubmit={handleSubmit} autoComplete="off">
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
        <Button
          tag="Начать"
          theme="primary"
          // handleCkick={() => navigate("/step1")}
          // isDisabled={isValid && isSubmitting}
        />
      </Form>
    </Layout>
  );
};
