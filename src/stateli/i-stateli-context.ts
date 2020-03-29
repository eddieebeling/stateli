export interface IStateliContext<RootState = any, State = any> {
  rootState: RootState;
  state: State;
  commit: <Payload = any>(type: string, payload: Payload) => void;
  dispatch: <Payload = any, Result = any>(type: string, payload: Payload) => Promise<Result>;
}