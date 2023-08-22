"use strict";
exports.__esModule = true;
exports.Stepper = void 0;
var react_1 = require("react");
var Stepper_module_css_1 = require("./Stepper.module.css");
exports.Stepper = function (_a) {
    var step = _a.step;
    var _b = react_1.useState(), activeStep = _b[0], setActivStep = _b[1];
    var steps = [{ label: 1 }, { label: 2 }, { label: 3 }];
    return (React.createElement("div", { className: Stepper_module_css_1["default"].block },
        React.createElement("div", { className: Stepper_module_css_1["default"].inner },
            React.createElement("div", { className: Stepper_module_css_1["default"].item },
                React.createElement("span", null),
                React.createElement("label", { className: Stepper_module_css_1["default"].label__inactive }, "1")),
            React.createElement("div", { className: Stepper_module_css_1["default"].item },
                React.createElement("span", { className: Stepper_module_css_1["default"].step__inactive }),
                React.createElement("label", { className: Stepper_module_css_1["default"].label__inactive }, "2")),
            React.createElement("div", { className: Stepper_module_css_1["default"].item },
                React.createElement("span", { className: Stepper_module_css_1["default"].step__inactive }),
                React.createElement("label", { className: Stepper_module_css_1["default"].label__inactive }, "3"))),
        React.createElement("div", { className: Stepper_module_css_1["default"].line__inactive }),
        React.createElement("div", { className: Stepper_module_css_1["default"].line__active })));
};
