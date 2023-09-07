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
var Input_1 = require("../Input/Input");
var Checkbox_1 = require("../Checkbox/Checkbox");
var Radio_1 = require("../Radio/Radio");
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
var icon_add = (React.createElement("svg", { 
    // className={styles.addbtn__svg}
    xmlns: "http://www.w3.org/2000/svg", width: "20", height: "20", viewBox: "0 0 20 20", fill: "#5558FA" },
    React.createElement("path", { d: "M11 5C11 4.44772 10.5523 4 9.99998 4C9.44769 4 8.99998 4.44772 8.99998 5V8.99998H5C4.44772 8.99998 4 9.44769 4 9.99998C4 10.5523 4.44772 11 5 11H8.99998V15C8.99998 15.5522 9.44769 16 9.99998 16C10.5523 16 11 15.5522 11 15V11H15C15.5522 11 16 10.5523 16 9.99998C16 9.44769 15.5522 8.99998 15 8.99998H11V5Z" })));
exports.StepTwo = function () {
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
    return (React.createElement(React.Fragment, null,
        React.createElement("div", null,
            React.createElement("label", null, "Advantages"),
            arrayInput.map(function (item, index) {
                return (React.createElement("div", { key: item.id },
                    React.createElement(Input_1.Input, { type: item.type, name: item.type, label: "" }),
                    React.createElement("button", { onClick: function () { return removeInput(item.id); } })));
            }),
            React.createElement("button", { onClick: addInput, type: "button" }, icon_add)),
        React.createElement("div", { className: StepTwo_module_css_1["default"].checkbox },
            React.createElement("label", { className: StepTwo_module_css_1["default"].label }, "Checkbox group"),
            React.createElement(Checkbox_1.Checkbox, { label: "1" }),
            React.createElement(Checkbox_1.Checkbox, { label: "2" }),
            React.createElement(Checkbox_1.Checkbox, { label: "3" })),
        React.createElement("div", { className: StepTwo_module_css_1["default"].radiogroup },
            React.createElement("label", { className: StepTwo_module_css_1["default"].label }, "Radio group"),
            React.createElement(Radio_1.Radio, { label: "1", name: "radiogroup", value: "1" }),
            React.createElement(Radio_1.Radio, { label: "2", name: "radiogroup", value: "2" }),
            React.createElement(Radio_1.Radio, { label: "3", name: "radiogroup", value: "3" }))));
};
