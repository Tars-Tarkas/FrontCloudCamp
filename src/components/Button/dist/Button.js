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
exports.Button = void 0;
var Button_module_css_1 = require("./Button.module.css");
exports.Button = function (props) {
    var _a = props.tag, tag = _a === void 0 ? "Начать" : _a, _b = props.theme, theme = _b === void 0 ? "outline" : _b, rest = __rest(props, ["tag", "theme"]);
    return (React.createElement("button", __assign({}, rest, { className: [Button_module_css_1["default"]["button"], Button_module_css_1["default"]["button-" + theme]].join(" ") }), tag));
};
