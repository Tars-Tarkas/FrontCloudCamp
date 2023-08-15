"use strict";
exports.__esModule = true;
exports.Stepper = void 0;
var Stepper_module_css_1 = require("./Stepper.module.css");
var dotSvg = (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 16 16", fill: "none" },
    React.createElement("circle", { cx: "7.9999", cy: "7.9999", r: "1.6", fill: "white" })));
var checkSvg = (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 16 16", fill: "none" },
    React.createElement("path", { d: "M7.66147 11.8737C7.56698 11.9987 7.41929 12.0723 7.26252 12.0723H6.68243C6.54729 12.0723 6.41791 12.0176 6.32376 11.9206L3.50413 9.01762C3.31569 8.8236 3.31569 8.51491 3.50413 8.32089L3.97572 7.83535C4.1721 7.63317 4.49669 7.63317 4.69306 7.83535L6.49489 9.69046C6.70845 9.91034 7.06776 9.88806 7.25251 9.64349L11.1512 4.48265C11.321 4.2579 11.6428 4.21769 11.8627 4.39375L12.3864 4.81309C12.5976 4.98226 12.6359 5.28881 12.4728 5.50476L7.66147 11.8737Z", fill: "white" })));
exports.Stepper = function (_a) {
    var step = _a.step;
    return (React.createElement("div", { className: Stepper_module_css_1["default"].block },
        React.createElement("div", { className: Stepper_module_css_1["default"].step },
            React.createElement("span", { className: Stepper_module_css_1["default"].circle }, dotSvg),
            React.createElement("label", { className: Stepper_module_css_1["default"].label }, "1"))));
};
