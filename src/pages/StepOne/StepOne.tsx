import { FC } from "react";
import { useFormik } from "formik";
import { validationScheme } from "./yup.sheme";
import { Layout } from "../../components/Layout/Layout";
import { Form } from "../../components/Form/Form";
import { Stepper } from "../../components/Stepper/Stepper";
import { Input } from "../../components/Input/Input";
import { Select } from "../../components/Select/Select";
import { Button } from "../../components/Button/Button";

export const StepOne: FC = () => {
  const { values, handleChange, handleBlur, handleSubmit, errors } = useFormik<{
    nickname: string;
    name: string;
    sername: string;
    sex: "man" | "women" | "Не выбрано";
  }>({
    initialValues: { nickname: "", name: "", sername: "", sex: "Не выбрано" },
    validationSchema: validationScheme,
    onSubmit: (values) => {},
  });
  return (
    <Layout>
      <Form paddingstyle="step" onSubmit={handleSubmit}>
        <Stepper step="one" />
        <Input
          name="nickname"
          label="Nickname"
          value={values.nickname}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.nickname}
        />
        <Input
          name="name"
          label="Name"
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.name}
        />
        <Input
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
          // value={values.sex}
          onChange={handleChange}
          onBlur={handleBlur}
        >
          <option disabled>Не выбрано</option>
          <option value="man">Man</option>
          <option value="woman">Woman</option>
        </Select>
        <div>
          <Button tag="Назад" theme="outline" />
          <Button tag="Далее" theme="primary" />
        </div>
      </Form>
    </Layout>
  );
};
