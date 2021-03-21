"use strict";
exports.__esModule = true;
exports.isPaired = exports.runLengthEncoding = exports.countVowels = void 0;
var R = require("ramda");
var stringToArray = R.split("");
/* Question 1 */
// export const countVowels: (s: string) => number = (s) => {
//     const arr: string[] = R.pipe(
//         (s: string) => s.toLowerCase(),
//         (s: string) => stringToArray(s),
//         (arr: string[]) => {
//             const vowels: string[] = ['a', 'e', 'i', 'o', 'u'];
//             const filtered: string[] = arr.filter(item => vowels.includes(item))
//             return filtered;
//         }
//     )(s);
//     return arr.length;
// }
var countVowels = function (s) {
    return stringToArray(s.toLowerCase()).filter(function (item) { return ['a', 'e', 'i', 'o', 'u'].includes(item); }).length;
};
exports.countVowels = countVowels;
console.log(exports.countVowels("This is SOME Text"));
/* Question 2 */
var runLengthEncoding = function (s) {
    return stringToArray(s).reduce(function (acc, curr, index, arr) {
        var l = arr.filter(function (value) { return arr.indexOf(value) === index; }).length;
        return (l === 0) ? acc : (l === 1) ? acc + curr : acc + curr + l;
    }, "");
};
exports.runLengthEncoding = runLengthEncoding;
console.log(exports.runLengthEncoding("aAAcsaaccd"));
/* Question 3 */
exports.isPaired = undefined;
var arr = function (x, y) { return x.some(y); };
var b = function (x) { return x.reduce(function (acc, cur) { return acc + cur; }, 0); };
var c = function (x, y) { return x ? y[0] : y[1]; };
