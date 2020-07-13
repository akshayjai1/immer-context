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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.withIContext = void 0;
var react_1 = __importDefault(require("react"));
var IContext_1 = require("./IContext");
exports.withIContext = function (Wrapper, _context_initialState) {
    return function (props) {
        return (react_1.default.createElement(IContext_1.IContext, { _context_initialState: _context_initialState },
            react_1.default.createElement(Wrapper, __assign({}, props))));
    };
};
//# sourceMappingURL=withIContext.js.map