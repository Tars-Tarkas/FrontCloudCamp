"use strict";
exports.__esModule = true;
exports.Modal = void 0;
var react_1 = require("react");
var Modal_module_css_1 = require("./Modal.module.css");
exports.Modal = function (_a) {
    var visible = _a.visible, children = _a.children, onClose = _a.onClose;
    var onKeydown = function (_a) {
        var key = _a.key;
        switch (key) {
            case "Escape":
                // onClose();
                break;
        }
    };
    react_1.useEffect(function () {
        document.addEventListener("keydown", onKeydown);
        return function () { return document.removeEventListener("keydown", onKeydown); };
    });
    // if (!visible) return null;
    return (React.createElement("div", { className: Modal_module_css_1["default"].modal },
        React.createElement("div", { className: Modal_module_css_1["default"].dialog }, children)));
};
