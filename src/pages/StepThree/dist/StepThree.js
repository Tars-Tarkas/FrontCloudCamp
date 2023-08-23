"use strict";
exports.__esModule = true;
exports.StepThree = void 0;
var StepThree_module_css_1 = require("./StepThree.module.css");
var Form_1 = require("../../components/Form/Form");
var Stepper_1 = require("../../components/Stepper/Stepper");
var TextArea_1 = require("../../components/TextArea/TextArea");
var Button_1 = require("../../components/Button/Button");
exports.StepThree = function () {
    return (React.createElement(Form_1.Form, null,
        React.createElement(Stepper_1.Stepper, null),
        React.createElement(TextArea_1.TextArea, { label: "About", placeholder: "Placeholder" }),
        React.createElement("div", { className: StepThree_module_css_1["default"].btn_block },
            React.createElement(Button_1.Button, { tag: "\u041D\u0430\u0437\u0430\u0434", theme: "outline", type: "button" }),
            React.createElement(Button_1.Button, { tag: "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C", theme: "primary" }))));
};
