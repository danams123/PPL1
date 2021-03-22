"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bind = void 0;
const bind = (state, f) => s => {
    const [_state, _value] = state(s);
    return f(_value)(_state);
};
exports.bind = bind;
//# sourceMappingURL=state.js.map