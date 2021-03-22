import { Result, makeFailure, makeOk, bind, either, isOk } from "../lib/result";

/* Library code */
const findOrThrow = <T>(pred: (x: T) => boolean, a: T[]): T => {
    for (let i = 0; i < a.length; i++) {
        if (pred(a[i])) return a[i];
    }
    throw "No element found.";
}

export let findResult = <T>(pred: (x: T) => boolean, arr: T[]): Result<T> => {
    if (arr.filter(pred).length === 0) return makeFailure("No elemnt found.");
    else return makeOk(arr.filter(pred)[0]);
}

/* Client code */
const returnSquaredIfFoundEven_v1 = (a: number[]): number => {
    try {
        const x = findOrThrow(x => x % 2 === 0, a);
        return x * x;
    } catch (e) {
        return -1;
    }
}

const squareResult = (r: number): Result<number> =>
    makeOk(r * r);

let isEven = (x: number): boolean => x % 2 === 0;

export const returnSquaredIfFoundEven_v2 = (arr: number[]): Result<number> =>
    bind(findResult(isEven, arr), squareResult);

export const returnSquaredIfFoundEven_v3 = (arr: number[]): number =>
    either(findResult(isEven, arr), x => x * x, message => -1);