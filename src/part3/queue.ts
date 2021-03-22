import { State, bind } from "./state";
import * as R from "ramda";

export type Queue = number[];

export const enqueue: (x: number) => State<Queue, undefined> = (x) => {
    return (queue: Queue) => {
        const nQueue: Queue = R.append(x, queue);
        return [nQueue, undefined];
    }
}
// let q:Queue=[1,2,3];
console.log(enqueue(5)([1, 2, 3]));

export const dequeue: (queue: Queue) => [Queue, number] = (queue) => {
    const toDel = queue[0];
    const nStack = R.drop(1, queue);
    return [nStack, toDel];
}
console.log(dequeue([1, 2, 3, 5]));

export const queueManip: (queue: Queue) => [Queue, number] = (queue) => {
    return bind(dequeue, (x: number) => bind(enqueue(2 * x), () => bind(enqueue(x / 3), () => dequeue)))(queue);
}