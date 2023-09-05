"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.MultiStepForm = void 0;
var react_1 = require("react");
var yup = require("yup");
var react_hook_form_1 = require("react-hook-form");
var Button_1 = require("../../components/Button/Button");
var StepOne_1 = require("../../components/StepOne/StepOne");
var yup_1 = require("@hookform/resolvers/yup");
function getStepContent(step) {
    switch (step) {
        case 0:
            return React.createElement(StepOne_1.StepOne, null);
        // case 1:
        //   return <Step2 />;
        // case 2:
        //   return <Step3 />;
        case 3:
        default:
            return "Unknown step";
    }
}
var nicknameRegExp = /^[а-яА-ЯёЁa-zA-Z0-9]+$/;
var nameRegExp = /^[а-яА-Яa-zA-Z0-9]+$/;
var validationSchema = yup.object().shape({
    nickname: yup
        .string()
        .max(30)
        .matches(nicknameRegExp, "Некорректно заполнен, только буквы и цифры, макс. длина 30 символов")
        .required("Введите никнайм"),
    name: yup
        .string()
        .max(50)
        .matches(nameRegExp, "Некорректно заполнен, только буквы, макс. длина 50 символов")
        .required("Введите имя"),
    sername: yup
        .string()
        .max(50)
        .matches(nameRegExp, "Некорректно заполнен, только буквы, макс. длина 50 символов")
        .required("Введите имя пользователя"),
    sex: yup
        .string()
        .oneOf(["man", "woman"], "Не выбран пол")
        .required("Выберите пол")
});
var defaultValues = {
    nickname: "",
    name: "",
    sername: "",
    sex: ""
};
exports.MultiStepForm = function () {
    var _a = react_1.useState(0), activeStep = _a[0], setActiveStep = _a[1];
    var steps = ["StepOne", "StepTwo", "StepThree"];
    var onSubmit = function (data) {
        console.log(JSON.stringify(data));
        alert(JSON.stringify(data));
        // handleNext();
    };
    var currentValidationSchema = validationSchema[activeStep];
    var methods = react_hook_form_1.useForm({
        // shouldUnregister: false,
        defaultValues: defaultValues,
        resolver: yup_1.yupResolver(currentValidationSchema),
        mode: "all"
    });
    var handleSubmit = methods.handleSubmit, reset = methods.reset, trigger = methods.trigger, formState = methods.formState;
    var handleNext = function () { return __awaiter(void 0, void 0, void 0, function () {
        var isStepValid;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, trigger()];
                case 1:
                    isStepValid = _a.sent();
                    if (isStepValid)
                        setActiveStep(function (prevActiveStep) { return prevActiveStep + 1; });
                    return [2 /*return*/];
            }
        });
    }); };
    var handleBack = function () {
        setActiveStep(function (prevActiveStep) { return prevActiveStep - 1; });
    };
    return (React.createElement(React.Fragment, null,
        React.createElement(react_hook_form_1.FormProvider, __assign({}, methods),
            React.createElement("form", null,
                React.createElement("div", null, getStepContent(activeStep)),
                React.createElement("div", null,
                    React.createElement(Button_1.Button, { tag: "\u041D\u0430\u0437\u0430\u0434", theme: "outline", type: "button", onClick: handleBack }),
                    activeStep === steps.length - 1 ? (React.createElement(Button_1.Button, { onClick: handleSubmit(onSubmit) }, "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C")) : (React.createElement(Button_1.Button, { onClick: handleNext, disabled: !formState.isValid }, "\u0414\u0430\u043B\u0435\u0435")))))));
};
