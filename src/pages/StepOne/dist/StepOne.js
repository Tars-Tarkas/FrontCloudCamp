"use strict";
exports.__esModule = true;
exports.StepOne = void 0;
var formik_1 = require("formik");
var yup_sheme_1 = require("./yup.sheme");
var Layout_1 = require("../../components/Layout/Layout");
var Form_1 = require("../../components/Form/Form");
var Stepper_1 = require("../../components/Stepper/Stepper");
var Input_1 = require("../../components/Input/Input");
var Select_1 = require("../../components/Select/Select");
var Button_1 = require("../../components/Button/Button");
exports.StepOne = function () {
    var _a = formik_1.useFormik({
        initialValues: { nickname: "", name: "", sername: "", sex: "Не выбрано" },
        validationSchema: yup_sheme_1.validationScheme,
        onSubmit: function (values) { }
    }), values = _a.values, handleChange = _a.handleChange, handleBlur = _a.handleBlur, handleSubmit = _a.handleSubmit, errors = _a.errors;
    return (React.createElement(Layout_1.Layout, null,
        React.createElement(Form_1.Form, { paddingstyle: "step", onSubmit: handleSubmit },
            React.createElement(Stepper_1.Stepper, { step: "one" }),
            React.createElement(Input_1.Input, { name: "nickname", label: "Nickname", value: values.nickname, onChange: handleChange, onBlur: handleBlur, error: errors.nickname }),
            React.createElement(Input_1.Input, { name: "name", label: "Name", value: values.name, onChange: handleChange, onBlur: handleBlur, error: errors.name }),
            React.createElement(Input_1.Input, { name: "sername", label: "Sername", value: values.sername, onChange: handleChange, onBlur: handleBlur, error: errors.sername }),
            React.createElement(Select_1.Select, { name: "sex", label: "Sex", error: errors.sex, defaultValue: "Не выбрано", 
                // value={values.sex}
                onChange: handleChange, onBlur: handleBlur },
                React.createElement("option", { disabled: true }, "\u041D\u0435 \u0432\u044B\u0431\u0440\u0430\u043D\u043E"),
                React.createElement("option", { value: "man" }, "Man"),
                React.createElement("option", { value: "woman" }, "Woman")),
            React.createElement("div", null,
                React.createElement(Button_1.Button, { tag: "\u041D\u0430\u0437\u0430\u0434", theme: "outline" }),
                React.createElement(Button_1.Button, { tag: "\u0414\u0430\u043B\u0435\u0435", theme: "primary" })))));
};
