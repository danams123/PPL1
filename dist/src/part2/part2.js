"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isPaired = exports.runLengthEncoding = exports.countVowels = void 0;
const R = require("ramda");
const stringToArray = R.split("");
/* Question 1 */
const countVowels = (s) => {
    return stringToArray(s.toLowerCase()).filter((item) => ['a', 'e', 'i', 'o', 'u'].includes(item)).length;
};
exports.countVowels = countVowels;
console.log(exports.countVowels("This is SOME Text"));
/* Question 2 */
const runLengthEncoding = (s) => {
    return stringToArray(s).reduce((acc, curr, index, arr) => {
        const l = arr.filter((value) => arr.indexOf(value) === index).length;
        return (l === 0) ? acc : (l === 1) ? acc + curr : acc + curr + l;
    }, "");
};
exports.runLengthEncoding = runLengthEncoding;
console.log(exports.runLengthEncoding("aaaabbbccd"));
/* Question 3 */
const isPaired = (s) => {
    const arr = stringToArray(s).filter((item) => ['(', '[', '{', '}', ']', ')'].includes(item));
    return parCheck(arr);
};
exports.isPaired = isPaired;
const parCheck = (arr) => {
    if (arr.length === 0)
        return true;
    const first = arr[0];
    const check = (first === '(') ? ')' : (first === '[') ? ']' : (first === '}') ? '}' : "";
    const counter = 0;
    const i = arr.reduce((acc, curr, index, arr) => {
        (['(', '[', '{'].includes(curr)) ? acc = acc + 1 : acc = acc - 1;
        if (acc === 0 && curr === check && index !== 0) {
            acc = index;
            index = arr.length;
        }
        return acc;
    }, 0);
    const nArr = R.remove(0, 1, arr);
    return ((i === arr.length - 1 && arr[i] === check) || (i !== 0)) ? parCheck(R.remove(i - 1, 1, nArr)) : false;
};
console.log(exports.isPaired("({{}})[({})]"));
//# sourceMappingURL=part2.js.map