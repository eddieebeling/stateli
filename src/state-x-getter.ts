export interface IStateXGetter<State, RooState = any, Result = any> {
  type: string;
  getValue(state: State, rootGetter?: (type: string) => any, rootState?: RooState): Result;
}
