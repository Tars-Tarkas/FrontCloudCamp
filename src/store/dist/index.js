"use strict";
exports.__esModule = true;
exports.store = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
var reducer_1 = require("./reducer/reducer");
exports.store = toolkit_1.configureStore({
    reducer: {
        FCC: reducer_1["default"],
        FCCPost: reducer_1.fetchData
    }
});
