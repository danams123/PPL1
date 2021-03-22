"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stackManip = exports.pop = exports.push = void 0;
const state_1 = require("./state");
const R = require("ramda");
const push = (x) => {
    return (stack) => {
        const nStack = R.prepend(x, stack);
        return [nStack, undefined];
    };
};
exports.push = push;
const pop = (stack) => {
    const toDel = stack[0];
    const nStack = R.drop(0, stack);
    return [nStack, toDel];
};
exports.pop = pop;
const stackManip = (stack) => {
    return state_1.bind(exports.pop, (x) => state_1.bind(exports.push(x * x), () => state_1.bind(exports.pop, (y) => exports.push(x + y))))(stack);
};
exports.stackManip = stackManip;
//# sourceMappingURL=stack.js.map