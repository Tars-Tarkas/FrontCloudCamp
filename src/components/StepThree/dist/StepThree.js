"use strict";
exports.__esModule = true;
exports.StepThree = void 0;
var yup = require("yup");
var TextArea_1 = require("../TextArea/TextArea");
exports.StepThree = function () {
    var validationScheme = yup.object().shape({
        about: yup.string().max(200).required("Не заполнено поле о себе")
    });
    return (React.createElement(TextArea_1.TextArea, { name: "about", label: "About", placeholder: "Placeholder" }));
};
