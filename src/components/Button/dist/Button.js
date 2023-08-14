"use strict";
exports.__esModule = true;
exports.Button = void 0;
var Button_module_css_1 = require("./Button.module.css");
exports.Button = function (props) {
    var _a = props.tag, tag = _a === void 0 ? "Начать" : _a, _b = props.theme, theme = _b === void 0 ? "outline" : _b, handleCkick = props.handleCkick, isDisabled = props.isDisabled;
    return (React.createElement("button", { type: "submit", onClick: handleCkick, disabled: isDisabled, className: [Button_module_css_1["default"]["button"], Button_module_css_1["default"]["button-" + theme]].join(" ") }, tag));
};
