import { State, bind } from "./state";
import * as R from "ramda";

export type Stack = number[];

export const push: (x: number) => State<Stack, undefined> = (x) => {
    return (stack: Stack) => {
        const nStack: Stack = R.prepend(x, stack);
        return [nStack, undefined];
    }
}

export const pop: (stack: Stack) => [Stack, number] = (stack) => {
    const toDel = stack[0];
    const nStack = R.drop(0, stack);
    return [nStack, toDel];
}

export const stackManip: (stack: Stack) => [Stack, number | undefined] = (stack) => {
    return bind(pop, (x: number) => bind(push(x * x), () => bind(pop, (y: number) => push(x + y))))(stack);
}
