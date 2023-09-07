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
exports.__esModule = true;
exports.StepOne = void 0;
var react_hook_form_1 = require("react-hook-form");
var Input_1 = require("../Input/Input");
var Select_1 = require("../Select/Select");
exports.StepOne = function () {
    var _a = react_hook_form_1.useFormContext(), register = _a.register, formState = _a.formState;
    return (React.createElement(React.Fragment, null,
        React.createElement("input", __assign({ type: "hidden" }, register("stepone", {
            shouldUnregister: true
        }))),
        React.createElement(Input_1.Input, { label: "nickname", type: "text", name: "nickname" }),
        React.createElement(Input_1.Input, { label: "name", type: "text", name: "name" }),
        React.createElement(Input_1.Input, { label: "sername", type: "text", name: "sername" }),
        React.createElement(Select_1.Select, { name: "sex" },
            React.createElement("option", { disabled: true }, "\u041D\u0435 \u0432\u044B\u0431\u0440\u0430\u043D\u043E"),
            React.createElement("option", { value: "man" }, "Man"),
            React.createElement("option", { value: "woman" }, "Woman"))));
};
