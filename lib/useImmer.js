"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useImmerReducer = exports.useImmer = void 0;
var immer_1 = __importDefault(require("immer"));
var react_1 = require("react");
function useImmer(initialValue) {
    var _a = react_1.useState(initialValue), val = _a[0], updateValue = _a[1];
    return [
        val,
        react_1.useCallback(function (updater) {
            updateValue(immer_1.default(updater));
        }, []),
    ];
}
exports.useImmer = useImmer;
// TODO: find action type
function useImmerReducer(reducer, initialState, initialAction) {
    var cachedReducer = react_1.useMemo(function () { return immer_1.default(reducer); }, [reducer]);
    return react_1.useReducer(cachedReducer, initialState, initialAction);
}
exports.useImmerReducer = useImmerReducer;
//# sourceMappingURL=useImmer.js.map