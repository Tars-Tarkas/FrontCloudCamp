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
var close = (React.createElement("svg", { "aria-hidden": "true", focusable: "false", xmlns: "http://www.w3.org/2000/svg", width: "20", height: "20" },
    React.createElement("path", { d: "M5.40385 4.6965C5.59911 4.50123 5.91569 4.50123 6.11095 4.6965L10.0002 8.5857L13.8892 4.69665C14.0845 4.50138 14.4011 4.50138 14.5963 4.69665L15.3034 5.40375C15.4987 5.59902 15.4987 5.9156 15.3034 6.11086L11.4144 9.99991L15.3033 13.8889C15.4986 14.0841 15.4986 14.4007 15.3033 14.596L14.5962 15.3031C14.401 15.4984 14.0844 15.4984 13.8891 15.3031L10.0002 11.4141L6.11103 15.3032C5.91577 15.4985 5.59919 15.4985 5.40393 15.3032L4.69682 14.5961C4.50156 14.4009 4.50156 14.0843 4.69682 13.889L8.58594 9.99991L4.69674 6.11071C4.50148 5.91545 4.50148 5.59886 4.69674 5.4036L5.40385 4.6965Z", fill: "#B3B3B3" })));
exports.Button = function (props) {
    var _a = props.tag, tag = _a === void 0 ? "Начать" : _a, _b = props.theme, theme = _b === void 0 ? "outline" : _b, rest = __rest(props, ["tag", "theme"]);
    return (React.createElement("button", __assign({}, rest, { className: [Button_module_css_1["default"]["button"], Button_module_css_1["default"]["button-" + theme]].join(" ") }),
        tag,
        React.createElement("svg", null,
            React.createElement("use", { xlinkHref: "icons/isons.svg#add" }))));
};
