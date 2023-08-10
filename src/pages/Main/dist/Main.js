"use strict";
exports.__esModule = true;
exports.Main = void 0;
var Layout_1 = require("../../components/Layout/Layout");
var Form_1 = require("../../components/Form/Form");
var Header_1 = require("../../components/Header/Header");
var yup = require("yup");
var formik_1 = require("formik");
var Input_1 = require("../../components/Input/Input");
var Button_1 = require("../../components/Button/Button");
var EmailSchema = yup.object().shape({
    email: yup
        .string()
        .email("Enter a valid email")
        .required("Email is required"),
    password: yup
        .string()
        .max(32, "Max password length is 32")
        .required("Password is required")
});
exports.Main = function (props) {
    var values = props.values, errors = props.errors, touched = props.touched, handleChange = props.handleChange, handleBlur = props.handleBlur, handleSubmit = props.handleSubmit, isSubmitting = props.isSubmitting;
    var initialValues = { phone: "", email: "" };
    return (React.createElement(Layout_1.Layout, null,
        React.createElement(formik_1.Formik, { initialValues: initialValues, validationSchema: EmailSchema, onSubmit: function (values, _a) {
                var setSubmitting = _a.setSubmitting;
                setTimeout(function () {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                }, 500);
            } },
            React.createElement(Form_1.Form, { paddingstyle: "main", onSubmit: handleSubmit },
                React.createElement(Header_1.Header, null),
                React.createElement(Input_1.Input, { name: "email", label: "\u041D\u043E\u043C\u0435\u0440 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430", placeholder: "+7 999 999-99-99", onChange: handleChange, onBlur: handleBlur }),
                React.createElement(formik_1.ErrorMessage, { name: "email", component: "div" }),
                React.createElement(Button_1.Button, { tag: "\u041D\u0430\u0447\u0430\u0442\u044C", theme: "primary" })))));
};
