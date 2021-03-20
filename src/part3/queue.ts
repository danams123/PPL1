import { State, bind } from "./state";
import * as R from "ramda";

export type Queue = number[];

export const enqueue: (x: number) => State<Queue, number> = (x) => {
    return (queue: Queue) => {
        const nQueue: Queue = R.prepend(x, queue);
        return [nQueue,];
    }
}

export const dequeue: (queue: Queue) => [Queue, number] = (queue) => {
    const toDel = queue[queue.length - 1];
    const nStack = R.dropLast(1, queue);
    return [nStack, toDel];
}

export const queueManip: (queue: Queue) => [Queue, number] = (queue) => {
    return bind(dequeue, (x: number) => bind(enqueue(2 * x), () => bind(enqueue(x / 3), () => dequeue)))(queue);
}