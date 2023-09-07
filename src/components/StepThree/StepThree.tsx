import { FC } from "react";
import * as yup from "yup";
import { TextArea } from "../TextArea/TextArea";

export const StepThree: FC = () => {
  const validationScheme = yup.object().shape({
    about: yup.string().max(200).required("Не заполнено поле о себе"),
  });

  return (
    <TextArea
      name="about"
      label="About"
      placeholder="Placeholder"
      //   error={errors.about}
      //   defaultValue={values.about}
      //   onChange={handleChange}
      //   onBlur={handleBlur}
    />
  );
};
