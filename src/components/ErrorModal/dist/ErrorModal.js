"use strict";
exports.__esModule = true;
exports.ErrorModal = void 0;
var ErrorModal_module_css_1 = require("./ErrorModal.module.css");
var Button_1 = require("../Button/Button");
var Modal_1 = require("../Modal/Modal");
exports.ErrorModal = function () {
    var icon_error = (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "48", height: "48", viewBox: "0 0 48 48", fill: "#E84E58" },
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M23.9998 4.7998C13.4014 4.7998 4.7998 13.4014 4.7998 23.9998C4.7998 34.5982 13.4014 43.1998 23.9998 43.1998C34.5982 43.1998 43.1998 34.5982 43.1998 23.9998C43.1998 13.4014 34.5982 4.7998 23.9998 4.7998ZM16.4095 15.4835C16.7319 15.161 17.2548 15.161 17.5772 15.4835L24 21.9062L30.4225 15.4838C30.745 15.1613 31.2678 15.1613 31.5903 15.4838L32.758 16.6515C33.0805 16.974 33.0805 17.4968 32.758 17.8192L26.3355 24.2417L32.7579 30.6641C33.0804 30.9865 33.0804 31.5094 32.7579 31.8318L31.5902 32.9996C31.2677 33.322 30.7449 33.322 30.4224 32.9996L24 26.5772L17.5773 32.9998C17.2549 33.3223 16.7321 33.3223 16.4096 32.9998L15.2419 31.8321C14.9194 31.5096 14.9194 30.9868 15.2419 30.6643L21.6645 24.2417L15.2417 17.819C14.9193 17.4965 14.9193 16.9737 15.2417 16.6512L16.4095 15.4835Z" })));
    var icon_close = (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "20", height: "20", viewBox: "0 0 20 20", fill: "#B3B3B3" },
        React.createElement("path", { d: "M5.40385 4.6965C5.59911 4.50123 5.91569 4.50123 6.11095 4.6965L10.0002 8.5857L13.8892 4.69665C14.0845 4.50138 14.4011 4.50138 14.5963 4.69665L15.3034 5.40375C15.4987 5.59902 15.4987 5.9156 15.3034 6.11086L11.4144 9.99991L15.3033 13.8889C15.4986 14.0841 15.4986 14.4007 15.3033 14.596L14.5962 15.3031C14.401 15.4984 14.0844 15.4984 13.8891 15.3031L10.0002 11.4141L6.11103 15.3032C5.91577 15.4985 5.59919 15.4985 5.40393 15.3032L4.69682 14.5961C4.50156 14.4009 4.50156 14.0843 4.69682 13.889L8.58594 9.99991L4.69674 6.11071C4.50148 5.91545 4.50148 5.59886 4.69674 5.4036L5.40385 4.6965Z" })));
    return (React.createElement(Modal_1.Modal, null,
        React.createElement("div", { className: ErrorModal_module_css_1["default"].block },
            React.createElement("div", { className: ErrorModal_module_css_1["default"].header },
                React.createElement("label", { className: ErrorModal_module_css_1["default"].title }, "\u041E\u0448\u0438\u0431\u043A\u0430"),
                React.createElement("button", { className: ErrorModal_module_css_1["default"].btn, type: "button" }, icon_close)),
            React.createElement("div", { className: ErrorModal_module_css_1["default"].icon__block },
                React.createElement("span", { className: ErrorModal_module_css_1["default"].icon }, icon_error)),
            React.createElement(Button_1.Button, { tag: "\u0417\u0430\u043A\u0440\u044B\u0442\u044C", theme: "primary", type: "button" }))));
};
