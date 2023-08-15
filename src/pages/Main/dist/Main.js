"use strict";
exports.__esModule = true;
exports.Main = void 0;
var formik_1 = require("formik");
var ypu_sheme_1 = require("./ypu.sheme");
var Layout_1 = require("../../components/Layout/Layout");
var Form_1 = require("../../components/Form/Form");
var Header_1 = require("../../components/Header/Header");
var Input_1 = require("../../components/Input/Input");
var Button_1 = require("../../components/Button/Button");
exports.Main = function () {
    var _a = formik_1.useFormik({
        initialValues: { phone: "", email: "" },
        validationSchema: ypu_sheme_1.validationScheme,
        onSubmit: function (values) { }
    }), values = _a.values, handleChange = _a.handleChange, handleBlur = _a.handleBlur, handleSubmit = _a.handleSubmit, errors = _a.errors;
    return (React.createElement(Layout_1.Layout, null,
        React.createElement(Form_1.Form, { paddingstyle: "main", onSubmit: handleSubmit, autoComplete: "off" },
            React.createElement(Header_1.Header, null),
            React.createElement(Input_1.Input, { name: "phone", label: "\u041D\u043E\u043C\u0435\u0440 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430", placeholder: "+7 999 999-99-99", value: values.phone, onChange: handleChange, onBlur: handleBlur, error: errors.phone }),
            React.createElement(Input_1.Input, { name: "email", label: "Email", placeholder: "tim.jennings@example.com", value: values.email, onChange: handleChange, onBlur: handleBlur, error: errors.email }),
            React.createElement(Button_1.Button, { tag: "\u041D\u0430\u0447\u0430\u0442\u044C", theme: "primary" }))));
};
