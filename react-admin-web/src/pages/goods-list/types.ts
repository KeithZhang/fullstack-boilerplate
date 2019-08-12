import action from './action';
import { IGoodsListReducer } from './reducer';

export type IGoodsListProps = {
  goodsList: IGoodsListReducer;
} & ReturnType<typeof action>;
