export type State<S, A> = (initialState: S) => [S, A];

export const bind: <S, A, B>(state: State<S, A>, f: (x: A) => State<S, B>) => State<S, B> = (state, f) => s => {
    const [_state, _value] = state(s);
    const nState = f(_value);
    return nState(_state);
}

// export function  bind<a, b>(stateMonad: State<a>, fn: (value: a) => State<b>): State<b> {
//     return (x: number) => {
//         const [_value, _state] = stateMonad(x);
//         return fn(_value)(_state);
//     }
// }