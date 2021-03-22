"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.queueManip = exports.dequeue = exports.enqueue = void 0;
const state_1 = require("./state");
const R = require("ramda");
const enqueue = (x) => {
    return (queue) => {
        const nQueue = R.prepend(x, queue);
        return [nQueue, undefined];
    };
};
exports.enqueue = enqueue;
const dequeue = (queue) => {
    const toDel = queue[queue.length - 1];
    const nStack = R.dropLast(1, queue);
    return [nStack, toDel];
};
exports.dequeue = dequeue;
const queueManip = (queue) => {
    return state_1.bind(exports.dequeue, (x) => state_1.bind(exports.enqueue(2 * x), () => state_1.bind(exports.enqueue(x / 3), () => exports.dequeue)))(queue);
};
exports.queueManip = queueManip;
//# sourceMappingURL=queue.js.map