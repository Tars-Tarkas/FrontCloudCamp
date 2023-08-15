"use strict";
exports.__esModule = true;
exports.validationScheme = void 0;
var yup = require("yup");
var phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
exports.validationScheme = yup.object().shape({
    phone: yup
        .string()
        .matches(phoneRegExp, "Некорректно заполнен номер телефона")
        .required("Введите номер телефона"),
    email: yup
        .string()
        .email("Некорректно заполнен адрес электронной почты")
        .required("Введите адрес электронно почты")
});
