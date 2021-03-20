import { State, bind } from "./state";
import * as R from "ramda";

export type Stack = number[];

export const push: (x: number) => State<Stack, number> = (x) => {
    return (stack: Stack) => {
        const nStack: Stack = R.append(x, stack);

        return [nStack,];
    }
}

export const pop: (stack: Stack) => [Stack, number] = (stack) => {
    const toDel = stack[0];
    const nStack = R.drop(0, stack);
    return [nStack, toDel];
}

export const stackManip: (stack: Stack) => [Stack, number] = (stack) => {
    return bind(pop, (x: number) => bind(push(x * x), () => bind(pop, (y: number) => push(x + y))))(stack);
}
