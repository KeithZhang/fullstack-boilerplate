import Actions from './action';
import { ITemplateReducer } from './reducer';

export type ITemplateProps = {
  template: ITemplateReducer;
} & ReturnType<typeof Actions>;
