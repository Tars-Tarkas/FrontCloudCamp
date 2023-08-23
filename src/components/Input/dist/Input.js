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
exports.Input = void 0;
var Input_module_css_1 = require("./Input.module.css");
exports.Input = function (_a) {
    var type = _a.type, name = _a.name, error = _a.error, label = _a.label, rest = __rest(_a, ["type", "name", "error", "label"]);
    return (React.createElement("div", { className: Input_module_css_1["default"].block },
        label && (React.createElement("label", { htmlFor: name, className: Input_module_css_1["default"].label }, label)),
        React.createElement("input", __assign({ "aria-invalid": error ? "true" : "false", type: name, name: name }, rest, { className: Input_module_css_1["default"].input })),
        error && (React.createElement("span", { role: "alert", className: Input_module_css_1["default"].error }, error))));
};
