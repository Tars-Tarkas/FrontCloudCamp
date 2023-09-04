"use strict";
exports.__esModule = true;
exports.StepOne = void 0;
var react_router_dom_1 = require("react-router-dom");
var formik_1 = require("formik");
var yup = require("yup");
var Input_1 = require("../../components/Input/Input");
var Select_1 = require("../../components/Select/Select");
var Form_1 = require("../../components/Form/Form");
exports.StepOne = function () {
    var nicknameRegExp = /^[а-яА-ЯёЁa-zA-Z0-9]+$/;
    var nameRegExp = /^[а-яА-Яa-zA-Z0-9]+$/;
    var validationScheme = yup.object().shape({
        nickname: yup
            .string()
            .max(30)
            .matches(nicknameRegExp, "Некорректно заполнен, только буквы и цифры, макс. длина 30 символов")
            .required("Введите никнайм"),
        name: yup
            .string()
            .max(50)
            .matches(nameRegExp, "Некорректно заполнен, только буквы, макс. длина 50 символов")
            .required("Введите имя"),
        sername: yup
            .string()
            .max(50)
            .matches(nameRegExp, "Некорректно заполнен, только буквы, макс. длина 50 символов")
            .required("Введите имя пользователя"),
        sex: yup
            .string()
            .oneOf(["man", "woman"], "Не выбран пол")
            .required("Выберите пол")
    });
    var navigate = react_router_dom_1.useNavigate();
    var _a = formik_1.useFormik({
        initialValues: { nickname: "1", name: "", sername: "", sex: "Не выбрано" },
        validationSchema: validationScheme,
        onSubmit: function (values, _a) {
            var setFieldValue = _a.setFieldValue;
            if (!isValidating) {
                navigate("/steptwo");
            }
        }
    }), values = _a.values, handleChange = _a.handleChange, handleBlur = _a.handleBlur, handleSubmit = _a.handleSubmit, errors = _a.errors, isValidating = _a.isValidating;
    var handelClickBack = function () {
        navigate("/");
    };
    return (React.createElement(Form_1.Form, { onSubmit: function (e) {
            e.preventDefault();
            handleSubmit(e);
        } },
        React.createElement(Input_1.Input, { type: "nickname", name: "nickname", label: "Nickname", value: values.nickname, onChange: handleChange, onBlur: handleBlur, error: errors.nickname }),
        React.createElement(Input_1.Input, { type: "name", name: "name", label: "Name", value: values.name, onChange: handleChange, onBlur: handleBlur, error: errors.name }),
        React.createElement(Input_1.Input, { type: "sername", name: "sername", label: "Sername", value: values.sername, onChange: handleChange, onBlur: handleBlur, error: errors.sername }),
        React.createElement(Select_1.Select, { name: "sex", label: "Sex", error: errors.sex, defaultValue: "Не выбрано", onChange: handleChange, onBlur: handleBlur },
            React.createElement("option", { disabled: true }, "\u041D\u0435 \u0432\u044B\u0431\u0440\u0430\u043D\u043E"),
            React.createElement("option", { value: "man" }, "Man"),
            React.createElement("option", { value: "woman" }, "Woman"))));
};
