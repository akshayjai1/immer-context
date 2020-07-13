"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IContext = exports.useIContext = void 0;
var react_1 = __importStar(require("react"));
var useImmer_1 = require("./useImmer");
var context = react_1.createContext({});
var updateContext = react_1.createContext({});
exports.useIContext = function () {
    return [react_1.useContext(context), react_1.useContext(updateContext)];
};
exports.IContext = function (props) {
    var _context_initialState = props._context_initialState;
    var _a = useImmer_1.useImmer(_context_initialState), state = _a[0], setState = _a[1];
    return (react_1.default.createElement(context.Provider, { value: state },
        react_1.default.createElement(updateContext.Provider, { value: setState }, props.children)));
};
//# sourceMappingURL=IContext.js.map