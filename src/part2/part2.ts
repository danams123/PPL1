import { log } from "node:console";
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
    const arr: string[] = stringToArray(s).filter((item: string) => ['(', '[', '{', '<', '>', '}', ']', ')'].includes(item));
    return parCheck(arr);
}

const parCheck: (arr: string[]) => boolean = (arr) => {

    return parCheck(arr.filter((value: string, index: number) => index != 0 || index != ))
}

let arr: <T>(x: T[], y: (element: T) => boolean) => boolean = (x, y) => x.some(y);

let b: (x: number[]) => number = x => x.reduce((acc: number, cur: number) => acc + cur, 0);

let c: <T1, T2>(x: T1 | undefined, y: T2[]) => T2 | undefined = (x, y) => x ? y[0] : y[1];

