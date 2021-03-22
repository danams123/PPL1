export type State<S, A> = (initialState: S) => [S, A];

export const bind: <S, A, B>(state: State<S, A>, f: (x: A) => State<S, B>) => State<S, B> = (state, f) => s => {
    const [_state, _value] = state(s);
    return f(_value)(_state);
}
