import { countReset, log } from "node:console";
import * as R from "ramda";

const stringToArray = R.split("");

/* Question 1 */

export const countVowels: (s: string) => number = (s) => {
    return stringToArray(s.toLowerCase()).filter((item: string) => ['a', 'e', 'i', 'o', 'u'].includes(item)).length;
}


console.log(countVowels("This is SOME Text"));

/* Question 2 */
export const runLengthEncoding: (s: string) => string = (s) => {
    return stringToArray(s).reduce((acc: string, curr: string, index: number, arr: string[]) => {
        const l: number = arr.filter((value: string) => arr.indexOf(value) === index).length;
        return (l === 0) ? acc : (l === 1) ? acc + curr : acc + curr + l;
    }, "")
}


console.log(runLengthEncoding("aaaabbbccd"));

/* Question 3 */
export const isPaired: (s: string) => boolean = (s) => {
    const arr: string[] = stringToArray(s).filter((item: string) => ['(', '[', '{', '}', ']', ')'].includes(item));
    return parCheck(arr);
}



const parCheck: (arr: string[]) => boolean = (arr) => {
    if (arr.length === 0) return true;
    const first: string = arr[0];
    const check = (first === '(') ? ')' : (first === '[') ? ']' : (first === '{') ? '}' : "";
    const counter: number = 0;
    const i: number = arr.reduce((acc: number, curr: string, index: number, arr: string[]) => {
        (['(', '[', '{'].includes(curr)) ? acc = acc + 1 : acc = acc - 1;
        if (acc === 0 && curr === check && index !== 0) {
            acc = index;
            index = arr.length;
        }
        return acc;
    }, 0)
    const nArr: string[] = R.remove(0, 1, arr);
    return ((i === arr.length - 1 && arr[i] === check) || (i !== 0)) ? parCheck(R.remove(i - 1, 1, nArr)) : false;
}


console.log(isPaired("(]"));
