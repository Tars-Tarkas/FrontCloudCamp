"use strict";
exports.__esModule = true;
exports.useStepper = void 0;
var react_1 = require("react");
exports.useStepper = function (steps) {
    var _a = react_1.useState(0), currentStepIndex = _a[0], setCurrentStepIndex = _a[1];
    var next = function () {
        setCurrentStepIndex(function (i) {
            if (i >= steps.length - 1)
                return i;
            return i + 1;
        });
    };
    var back = function () {
        setCurrentStepIndex(function (i) {
            if (i <= 0)
                return i;
            return i - 1;
        });
    };
    return {
        step: steps[currentStepIndex],
        steps: steps,
        next: next,
        back: back
    };
};
