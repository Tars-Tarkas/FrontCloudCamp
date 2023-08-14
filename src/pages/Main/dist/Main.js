"use strict";
exports.__esModule = true;
exports.Main = void 0;
var yup = require("yup");
var formik_1 = require("formik");
var react_router_dom_1 = require("react-router-dom");
var Layout_1 = require("../../components/Layout/Layout");
var Form_1 = require("../../components/Form/Form");
var Header_1 = require("../../components/Header/Header");
var Input_1 = require("../../components/Input/Input");
var Button_1 = require("../../components/Button/Button");
var phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
var validationScheme = yup.object().shape({
    phone: yup
        .string()
        .matches(phoneRegExp, "Некорректно заполнен номер телефона")
        .required("Введите номер телефона"),
    email: yup
        .string()
        .email("Некорректно заполнен адрес электронной почты")
        .required("Введите адрес электронно почты")
});
exports.Main = function () {
    var navigate = react_router_dom_1.useNavigate();
    var _a = formik_1.useFormik({
        initialValues: { phone: "", email: "" },
        validationSchema: validationScheme,
        onSubmit: function (values) { }
    }), values = _a.values, handleChange = _a.handleChange, handleBlur = _a.handleBlur, handleSubmit = _a.handleSubmit, errors = _a.errors;
    // console.log(isValidating);
    return (React.createElement(Layout_1.Layout, null,
        React.createElement(Form_1.Form, { paddingstyle: "main", handleSubmit: handleSubmit, autoComplete: "off" },
            React.createElement(Header_1.Header, null),
            React.createElement(Input_1.Input, { name: "phone", label: "\u041D\u043E\u043C\u0435\u0440 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430", placeholder: "+7 999 999-99-99", value: values.phone, onChange: handleChange, onBlur: handleBlur, error: errors.phone }),
            React.createElement(Input_1.Input, { name: "email", label: "Email", placeholder: "tim.jennings@example.com", value: values.email, onChange: handleChange, onBlur: handleBlur, error: errors.email }),
            React.createElement(Button_1.Button, { tag: "\u041D\u0430\u0447\u0430\u0442\u044C", theme: "primary" }))));
};
