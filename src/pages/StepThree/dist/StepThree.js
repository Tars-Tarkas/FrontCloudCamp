"use strict";
exports.__esModule = true;
exports.StepThree = void 0;
var formik_1 = require("formik");
var yup = require("yup");
var StepThree_module_css_1 = require("./StepThree.module.css");
var Form_1 = require("../../components/Form/Form");
var Stepper_1 = require("../../components/Stepper/Stepper");
var TextArea_1 = require("../../components/TextArea/TextArea");
var Button_1 = require("../../components/Button/Button");
var Modal_1 = require("../../components/Modal/Modal");
exports.StepThree = function () {
    var validationScheme = yup.object().shape({
        about: yup.string().max(200).required("Не заполнено поле о себе")
    });
    var _a = formik_1.useFormik({
        initialValues: { about: "111" },
        validationSchema: validationScheme,
        onSubmit: function (values, _a) {
            var setFieldValue = _a.setFieldValue;
            if (!isValidating) {
                // navigate("/steptwo");
            }
        }
    }), values = _a.values, handleChange = _a.handleChange, handleBlur = _a.handleBlur, handleSubmit = _a.handleSubmit, errors = _a.errors, isValidating = _a.isValidating;
    return (React.createElement(Form_1.Form, { onSubmit: function (e) {
            e.preventDefault();
            handleSubmit(e);
        } },
        React.createElement(Stepper_1.Stepper, null),
        React.createElement(TextArea_1.TextArea, { name: "about", label: "About", placeholder: "Placeholder", error: errors.about, defaultValue: values.about, onChange: handleChange, onBlur: handleBlur }),
        React.createElement("div", { className: StepThree_module_css_1["default"].btn_block },
            React.createElement(Button_1.Button, { tag: "\u041D\u0430\u0437\u0430\u0434", theme: "outline", type: "button" }),
            React.createElement(Button_1.Button, { tag: "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C", theme: "primary", type: "submit" })),
        React.createElement(Modal_1.Modal, null)));
};
