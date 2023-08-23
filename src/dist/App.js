"use strict";
exports.__esModule = true;
exports.App = void 0;
var react_router_dom_1 = require("react-router-dom");
require("./App.module.css");
var Main_1 = require("./pages/Main/Main");
var StepOne_1 = require("./pages/StepOne/StepOne");
var StepTwo_1 = require("./pages/StepTwo/StepTwo");
var StepThree_1 = require("./pages/StepThree/StepThree");
exports.App = function () {
    return (React.createElement(react_router_dom_1.Routes, null,
        React.createElement(react_router_dom_1.Route, { path: "/", element: React.createElement(Main_1.Main, null) }),
        React.createElement(react_router_dom_1.Route, { path: "/stepone", element: React.createElement(StepOne_1.StepOne, null) }),
        React.createElement(react_router_dom_1.Route, { path: "/steptwo", element: React.createElement(StepTwo_1.StepTwo, null) }),
        React.createElement(react_router_dom_1.Route, { path: "/stepthree", element: React.createElement(StepThree_1.StepThree, null) })));
};
exports["default"] = exports.App;
