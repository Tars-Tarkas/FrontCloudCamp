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
var react_router_dom_1 = require("react-router-dom");
var StepTwo_module_css_1 = require("./StepTwo.module.css");
var Form_1 = require("../../components/Form/Form");
var Input_1 = require("../../components/Input/Input");
var Button_1 = require("../../components/Button/Button");
var Stepper_1 = require("../../components/Stepper/Stepper");
var Checkbox_1 = require("../../components/Checkbox/Checkbox");
var Radio_1 = require("../../components/Radio/Radio");
exports.StepTwo = function () {
    var icon_delete = (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "20", height: "19", viewBox: "0 0 20 19", fill: "#CCCCCC" },
        React.createElement("path", { d: "M5.453 16.6522L4.55826 8.15225C4.52719 7.85703 4.75867 7.5999 5.05552 7.5999H14.9447C15.2416 7.5999 15.4731 7.85703 15.442 8.15225L14.5472 16.6522C14.5205 16.9067 14.3059 17.0999 14.05 17.0999H5.95025C5.69437 17.0999 5.47979 16.9067 5.453 16.6522Z" }),
        React.createElement("path", { d: "M17.0001 5.6999H3.00012C2.72398 5.6999 2.50012 5.47605 2.50012 5.1999V4.2999C2.50012 4.02376 2.72398 3.7999 3.00012 3.7999H5.35511C5.44983 3.7999 5.54261 3.77299 5.62263 3.72231L8.37761 1.97749C8.45764 1.92681 8.55041 1.8999 8.64514 1.8999H11.3551C11.4498 1.8999 11.5426 1.92681 11.6226 1.97749L14.3776 3.72231C14.4576 3.77299 14.5504 3.7999 14.6451 3.7999H17.0001C17.2763 3.7999 17.5001 4.02376 17.5001 4.2999V5.1999C17.5001 5.47604 17.2763 5.6999 17.0001 5.6999Z" })));
    var icon_add = (React.createElement("svg", { className: StepTwo_module_css_1["default"].addbtn__svg, xmlns: "http://www.w3.org/2000/svg", width: "20", height: "20", viewBox: "0 0 20 20", fill: "#5558FA" },
        React.createElement("path", { d: "M11 5C11 4.44772 10.5523 4 9.99998 4C9.44769 4 8.99998 4.44772 8.99998 5V8.99998H5C4.44772 8.99998 4 9.44769 4 9.99998C4 10.5523 4.44772 11 5 11H8.99998V15C8.99998 15.5522 9.44769 16 9.99998 16C10.5523 16 11 15.5522 11 15V11H15C15.5522 11 16 10.5523 16 9.99998C16 9.44769 15.5522 8.99998 15 8.99998H11V5Z" })));
    var navigate = react_router_dom_1.useNavigate();
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
                    id: new Date().getUTCMilliseconds(),
                    value: ""
                },
            ]);
        });
    };
    var removeInput = function (id) {
        var newArray = arrayInput.filter(function (item) { return item.id !== id; });
        setArrayInput(newArray);
    };
    var handleSubmit = function (e) {
        e.preventDefault();
        navigate("/stepthree");
    };
    return (React.createElement(Form_1.Form, { onSubmit: handleSubmit },
        React.createElement(Stepper_1.Stepper, null),
        React.createElement("div", { className: StepTwo_module_css_1["default"].advantages },
            React.createElement("label", { className: StepTwo_module_css_1["default"].label }, "Advantages"),
            arrayInput.map(function (item, index) {
                return (React.createElement("div", { key: item.id, className: StepTwo_module_css_1["default"].input__block },
                    React.createElement(Input_1.Input, { type: item.type, name: item.type }),
                    React.createElement("button", { onClick: function () { return removeInput(item.id); }, className: StepTwo_module_css_1["default"].removebtn }, icon_delete)));
            }),
            React.createElement("button", { onClick: addInput, type: "button", className: StepTwo_module_css_1["default"].addbtn }, icon_add)),
        React.createElement("div", { className: StepTwo_module_css_1["default"].checkbox },
            React.createElement("label", { className: StepTwo_module_css_1["default"].label }, "Checkbox group"),
            React.createElement(Checkbox_1.Checkbox, { label: "1" }),
            React.createElement(Checkbox_1.Checkbox, { label: "2" }),
            React.createElement(Checkbox_1.Checkbox, { label: "3" })),
        React.createElement("div", { className: StepTwo_module_css_1["default"].radiogroup },
            React.createElement("label", { className: StepTwo_module_css_1["default"].label }, "Radio group"),
            React.createElement(Radio_1.Radio, { label: "1", name: "radiogroup", value: "1" }),
            React.createElement(Radio_1.Radio, { label: "2", name: "radiogroup", value: "2" }),
            React.createElement(Radio_1.Radio, { label: "3", name: "radiogroup", value: "3" })),
        React.createElement("div", { className: StepTwo_module_css_1["default"].btn_block },
            React.createElement(Button_1.Button, { tag: "\u041D\u0430\u0437\u0430\u0434", theme: "outline", type: "button" }),
            React.createElement(Button_1.Button, { tag: "\u0414\u0430\u043B\u0435\u0435", theme: "primary" }))));
};
