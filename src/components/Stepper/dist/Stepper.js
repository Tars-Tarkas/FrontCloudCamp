"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
exports.Stepper = void 0;
var useStepper_1 = require("../../utils/hooks/useStepper");
exports.Stepper = function (_a) {
    var children = _a.children;
    var _b = useStepper_1.useStepper(__spreadArrays(children)), step = _b.step, back = _b.back, next = _b.next;
    return React.createElement(React.Fragment, null, step);
};
