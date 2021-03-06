import { ADD, MINUS } from './constant';

const INITIAL_STATE = {
  num: 0
};

export type IIndexReducer = typeof INITIAL_STATE;

export default function counter(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        num: state.num + 1
      };
    case MINUS:
      return {
        ...state,
        num: state.num - 1
      };
    default:
      return state;
  }
}
