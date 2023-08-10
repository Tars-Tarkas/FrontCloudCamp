"use strict";
exports.__esModule = true;
exports.App = void 0;
var react_router_dom_1 = require("react-router-dom");
require("./App.module.css");
var Main_1 = require("./pages/Main/Main");
var StepOne_1 = require("./pages/StepOne/StepOne");
exports.App = function () {
    return (React.createElement(react_router_dom_1.Routes, null,
        React.createElement(react_router_dom_1.Route, { path: "/", element: React.createElement(Main_1.Main, null) }),
        React.createElement(react_router_dom_1.Route, { path: "/step1", element: React.createElement(StepOne_1.StepOne, null) })));
};
exports["default"] = exports.App;
