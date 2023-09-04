"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
exports.__esModule = true;
exports.Form = void 0;
var Form_module_css_1 = require("./Form.module.css");
var Stepper_1 = require("../Stepper/Stepper");
var Button_1 = require("../Button/Button");
exports.Form = function (_a) {
    var children = _a.children, rest = __rest(_a, ["children"]);
    return (React.createElement("form", __assign({}, rest, { className: Form_module_css_1["default"].form }),
        React.createElement(Stepper_1.Stepper, null,
            React.createElement("h1", null, "1"),
            React.createElement("h1", null, "2"),
            React.createElement("h1", null, "3")),
        children,
        React.createElement("div", { className: Form_module_css_1["default"].btn_block },
            React.createElement(Button_1.Button, { tag: "\u041D\u0430\u0437\u0430\u0434", theme: "outline", type: "button" }),
            React.createElement(Button_1.Button, { tag: "\u0414\u0430\u043B\u0435\u0435", theme: "primary", type: "button" }))));
};
