"use strict";
exports.__esModule = true;
exports.Main = void 0;
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var Main_module_css_1 = require("./Main.module.css");
var Header_1 = require("../../components/Header/Header");
var Button_1 = require("../../components/Button/Button");
exports.Main = function () {
    var _a = react_1.useState(""), phone = _a[0], setPhone = _a[1];
    var navigate = react_router_dom_1.useNavigate();
    var handleSubmit = function (e) {
        e.preventDefault();
        var target = e.currentTarget.elements;
        var data = {
            phone: target.phone.value,
            email: target.email.value
        };
        if (data) {
            navigate("/stepone");
        }
    };
    var handleChange = function (e) {
        var x;
        x = e.target.value
            .replace(/\D/g, "")
            .match(/(\d{0,2})(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})(\d{0,3})/);
        if (x !== null) {
            if (!x[1]) {
                e.target.value = "+";
                return;
            }
            if (!x[2]) {
                e.target.value = "+" + x[1];
                return;
            }
            e.target.value =
                "+" + x[1] + " (" + x[2] +
                    (x[3] ? ") " + x[3] : "") +
                    (x[4] ? "-" + x[4] : "") +
                    (x[5] ? "-" + x[5] : "") +
                    (x[6] ? "-" + x[6] : "");
            // setPhone(e.target.value);
        }
    };
    return (React.createElement("form", { onSubmit: handleSubmit, className: Main_module_css_1["default"].form },
        React.createElement(Header_1.Header, null),
        React.createElement("div", { className: Main_module_css_1["default"].input__block },
            React.createElement("label", { className: Main_module_css_1["default"].label }, "\u041D\u043E\u043C\u0435\u0440 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430"),
            React.createElement("input", { className: Main_module_css_1["default"].input, type: "tel", name: "phone", required: true, onChange: function (e) { return handleChange(e); }, value: phone, placeholder: "+7 999 999-99-99" })),
        React.createElement("div", { className: Main_module_css_1["default"].input__block },
            React.createElement("label", { className: Main_module_css_1["default"].label }, "Email"),
            React.createElement("input", { className: Main_module_css_1["default"].input, type: "email", name: "email", required: true, defaultValue: "ddd@ddd.er" })),
        React.createElement("div", { className: Main_module_css_1["default"].btn },
            React.createElement(Button_1.Button, { tag: "\u041D\u0430\u0447\u0430\u0442\u044C", theme: "primary", type: "submit" }))));
};
