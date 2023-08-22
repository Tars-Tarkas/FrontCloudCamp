"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
exports.StepTwo = void 0;
var react_1 = require("react");
var StepTwo_module_css_1 = require("./StepTwo.module.css");
var Form_1 = require("../../components/Form/Form");
var Input_1 = require("../../components/Input/Input");
var Button_1 = require("../../components/Button/Button");
var Stepper_1 = require("../../components/Stepper/Stepper");
exports.StepTwo = function () {
    var inputArray = [
        {
            type: "text",
            id: 1,
            value: ""
        },
        {
            type: "text",
            id: 2,
            value: ""
        },
        {
            type: "text",
            id: 3,
            value: ""
        },
    ];
    var _a = react_1.useState(inputArray), arrayInput = _a[0], setArrayInput = _a[1];
    var addInput = function () {
        setArrayInput(function (s) {
            return __spreadArrays(s, [
                {
                    type: "text",
                    value: ""
                },
            ]);
        });
    };
    var removeInput = function () { };
    return (React.createElement(Form_1.Form, null,
        React.createElement(Stepper_1.Stepper, null),
        React.createElement("div", { className: StepTwo_module_css_1["default"].advantages },
            React.createElement("label", { className: StepTwo_module_css_1["default"].label }, "Advantages"),
            arrayInput.map(function (item, index) {
                return (React.createElement(React.Fragment, null,
                    React.createElement(Input_1.Input, { type: item.type, name: item.type, id: index.toString() }),
                    React.createElement("span", { id: index.toString() }, "Remove")));
            }),
            React.createElement(Button_1.Button, { tag: "+", type: "button", onClick: addInput })),
        React.createElement("div", { className: StepTwo_module_css_1["default"].checkbox },
            React.createElement("label", { className: StepTwo_module_css_1["default"].label }, "Checkbox group"),
            React.createElement(Input_1.Input, { type: "checkbox", name: "" })),
        React.createElement("div", { className: StepTwo_module_css_1["default"].radiogroup },
            React.createElement(Input_1.Input, { type: "radio", name: "radio", value: "1", label: "1", id: "1" }),
            React.createElement(Input_1.Input, { type: "radio", name: "radio", value: "2", label: "2", id: "2" })),
        React.createElement("div", { className: StepTwo_module_css_1["default"].btn_block },
            React.createElement(Button_1.Button, { tag: "\u041D\u0430\u0437\u0430\u0434", theme: "outline", type: "button" }),
            React.createElement(Button_1.Button, { tag: "\u0414\u0430\u043B\u0435\u0435", theme: "primary" }))));
};