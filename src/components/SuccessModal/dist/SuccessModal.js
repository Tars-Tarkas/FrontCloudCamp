"use strict";
exports.__esModule = true;
exports.SuccessModal = void 0;
var SuccessModal_module_css_1 = require("./SuccessModal.module.css");
var Button_1 = require("../Button/Button");
var react_router_dom_1 = require("react-router-dom");
var Modal_1 = require("../Modal/Modal");
exports.SuccessModal = function () {
    var navigate = react_router_dom_1.useNavigate();
    var icon_success = (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "48", height: "48", viewBox: "0 0 48 48", fill: "#05AE71" },
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M4.80005 24C4.80005 13.4016 13.4016 4.80005 24 4.80005C34.5985 4.80005 43.2001 13.4016 43.2001 24C43.2001 34.5985 34.5985 43.2001 24 43.2001C13.4016 43.2001 4.80005 34.5985 4.80005 24ZM31.4093 16.9903C30.9678 16.6817 30.3556 16.7557 30.0058 17.16L21.8957 26.5311L17.715 22.7738C17.3165 22.4157 16.7008 22.4157 16.3023 22.7738L14.7329 24.1842C14.2891 24.5831 14.2891 25.264 14.7329 25.6629L20.5953 30.9314C20.7874 31.1041 21.0396 31.2001 21.3016 31.2001H22.9073C23.2144 31.2001 23.5058 31.0683 23.7033 30.8401L33.3568 19.6856C33.7452 19.2368 33.6585 18.5625 33.1684 18.2199L31.4093 16.9903Z" })));
    var onClick = function () {
        navigate("/");
    };
    return (React.createElement(Modal_1.Modal, null,
        React.createElement("div", { className: SuccessModal_module_css_1["default"].block },
            React.createElement("label", { className: SuccessModal_module_css_1["default"].title }, "\u0424\u043E\u0440\u043C\u0430 \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0430"),
            React.createElement("span", { className: SuccessModal_module_css_1["default"].icon }, icon_success),
            React.createElement(Button_1.Button, { tag: "\u041D\u0430 \u0433\u043B\u0430\u0432\u043D\u0443\u044E", theme: "primary", onClick: onClick }))));
};
