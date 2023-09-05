"use strict";
exports.__esModule = true;
exports.App = void 0;
var react_router_dom_1 = require("react-router-dom");
require("./App.module.css");
var StepOne_1 = require("./pages/StepOne/StepOne");
var StepTwo_1 = require("./pages/StepTwo/StepTwo");
var StepThree_1 = require("./pages/StepThree/StepThree");
var MultiStepForm_1 = require("./pages/MultiStepForm/MultiStepForm");
exports.App = function () {
    return (React.createElement(react_router_dom_1.Routes, null,
        React.createElement(react_router_dom_1.Route, { path: "/", element: React.createElement(MultiStepForm_1.MultiStepForm, null) }),
        React.createElement(react_router_dom_1.Route, { path: "/stepone", element: React.createElement(StepOne_1.StepOne, null) }),
        React.createElement(react_router_dom_1.Route, { path: "/steptwo", element: React.createElement(StepTwo_1.StepTwo, null) }),
        React.createElement(react_router_dom_1.Route, { path: "/stepthree", element: React.createElement(StepThree_1.StepThree, null) })));
};
exports["default"] = exports.App;
