import * as yup from "yup";

const nicknameRegExp = /^[а-яА-ЯёЁa-zA-Z0-9]+$/;
const nameRegExp = /^[а-яА-Яa-zA-Z0-9]+$/;

export const validationScheme = yup.object().shape({
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
