"use strict";
exports.__esModule = true;
exports.Form = void 0;
var Form_module_css_1 = require("./Form.module.css");
exports.Form = function (_a) {
    var children = _a.children, paddingstyle = _a.paddingstyle, handleSubmit = _a.handleSubmit;
    return (React.createElement("form", { onSubmit: handleSubmit, className: [Form_module_css_1["default"]["form"], Form_module_css_1["default"]["form-" + paddingstyle]].join(" ") }, children));
};
