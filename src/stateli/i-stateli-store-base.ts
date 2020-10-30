import { IStateliGetter } from './i-stateli-getter';
import { IStateliModule } from './i-stateli-module';
import { IStateliMutation } from './i-stateli-mutation';
import { IStateliAction } from './i-stateli-action';
import { IStateliContext } from './i-stateli-context';

export interface IStateliStoreBase<RootState> {
  state: RootState;
  getter<Result = any>(type: string): Result;
  commit<Payload = any>(type: string, payload: Payload): void;
  dispatch<Payload = any, Result = any>(type: string, payload: Payload): Promise<Result>;
  reset(config: {
    actions?: IStateliAction<RootState>[];
    mutations?: IStateliMutation<RootState>[];
    getters?: IStateliGetter<RootState>[];
    modules?: IStateliModule[];
    initialState?: RootState;
  }): void;
  asContext(): IStateliContext<RootState>;
}
