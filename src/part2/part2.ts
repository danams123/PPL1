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
    const arr: string[] = stringToArray(s).filter((item: string) => ['(', '[', '{', '}', ']', ')'].includes(item));
    return parCheck(arr);
}

const parCheck: (arr: string[]) => boolean = (arr) => {

    return parCheck(arr.filter((value: string, index: number) => index != 0 || index != )) //not finished
}



