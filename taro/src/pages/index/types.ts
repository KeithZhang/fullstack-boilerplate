import action from './action';
import { IIndexReducer } from './reducer';

export type IIndexProps = {
  index: IIndexReducer;
} & ReturnType<typeof action>;
