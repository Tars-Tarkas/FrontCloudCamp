"use strict";
exports.__esModule = true;
exports.App = void 0;
var react_router_dom_1 = require("react-router-dom");
require("./App.module.css");
// import { StepOne } from "./pages/StepOne/StepOne";
// import { StepTwo } from "./pages/StepTwo/StepTwo";
// import { StepThree } from "./pages/StepThree/StepThree";
var MultiStepForm_1 = require("./pages/MultiStepForm/MultiStepForm");
exports.App = function () {
    return (React.createElement(react_router_dom_1.Routes, null,
        React.createElement(react_router_dom_1.Route, { path: "/", element: React.createElement(MultiStepForm_1.MultiStepForm, null) })));
};
exports["default"] = exports.App;
