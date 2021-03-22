"use strict";
exports.__esModule = true;
exports.isPaired = exports.runLengthEncoding = exports.countVowels = void 0;
var R = require("ramda");
var stringToArray = R.split("");
/* Question 1 */
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
console.log(exports.runLengthEncoding("aaaabbbccd"));
/* Question 3 */
var isPaired = function (s) {
    var arr = stringToArray(s).filter(function (item) { return ['(', '[', '{', '}', ']', ')'].includes(item); });
    return parCheck(arr);
};
exports.isPaired = isPaired;
var parCheck = function (arr) {
    if (arr.length === 0)
        return true;
    var first = arr[0];
    var check = (first === '(') ? ')' : (first === '[') ? ']' : (first === '{') ? '}' : "";
    var counter = 0;
    var i = arr.reduce(function (acc, curr, index, arr) {
        (['(', '[', '{'].includes(curr)) ? acc = acc + 1 : acc = acc - 1;
        if (acc === 0 && curr === check && index !== 0) {
            acc = index;
            index = arr.length;
        }
        return acc;
    }, 0);
    var nArr = R.remove(0, 1, arr);
    return ((i === arr.length - 1 && arr[i] === check) || (i !== 0)) ? parCheck(R.remove(i - 1, 1, nArr)) : false;
};
console.log(exports.isPaired("(]"));
