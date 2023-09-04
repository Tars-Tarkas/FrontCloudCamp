"use strict";
exports.__esModule = true;
exports.StepThree = void 0;
var formik_1 = require("formik");
var yup = require("yup");
var Form_1 = require("../../components/Form/Form");
var TextArea_1 = require("../../components/TextArea/TextArea");
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
        React.createElement(TextArea_1.TextArea, { name: "about", label: "About", placeholder: "Placeholder", error: errors.about, defaultValue: values.about, onChange: handleChange, onBlur: handleBlur }),
        React.createElement(Modal_1.Modal, null)));
};
