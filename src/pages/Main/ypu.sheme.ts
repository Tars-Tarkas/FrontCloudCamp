import * as yup from "yup";
import { InferType, ObjectSchema } from "yup";
import { IMainInput } from "./interface";

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const MainSchema: any = yup.object().shape({
  phone: yup
    .string()
    .matches(phoneRegExp, "Invalid phone.")
    .required("Required"),
  email: yup.string().email("Invalid email address").required("Required"),
});
