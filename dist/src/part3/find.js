"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.returnSquaredIfFoundEven_v3 = exports.returnSquaredIfFoundEven_v2 = exports.findResult = void 0;
const result_1 = require("../lib/result");
/* Library code */
const findOrThrow = (pred, a) => {
    for (let i = 0; i < a.length; i++) {
        if (pred(a[i]))
            return a[i];
    }
    throw "No element found.";
};
let findResult = (pred, arr) => {
    try {
        const x = findOrThrow(pred, arr);
        return result_1.makeOk(x);
    }
    catch (e) {
        return result_1.makeFailure("No elemnt found");
    }
};
exports.findResult = findResult;
/* Client code */
const returnSquaredIfFoundEven_v1 = (a) => {
    try {
        const x = findOrThrow(x => x % 2 === 0, a);
        return x * x;
    }
    catch (e) {
        return -1;
    }
};
// const squareResult = (r: number): Result<number> =>
//     makeOk(r * r);
let isEven = (x) => x % 2 === 0;
const returnSquaredIfFoundEven_v2 = (arr) => result_1.bind(exports.findResult(isEven, arr), (r) => result_1.makeOk(r * r));
exports.returnSquaredIfFoundEven_v2 = returnSquaredIfFoundEven_v2;
const returnSquaredIfFoundEven_v3 = (arr) => result_1.either(exports.findResult(isEven, arr), (x) => x * x, (message) => -1);
exports.returnSquaredIfFoundEven_v3 = returnSquaredIfFoundEven_v3;
//# sourceMappingURL=find.js.map