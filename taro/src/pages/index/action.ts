import { ADD, MINUS } from './constant';

export default dispatch => {
  const actions = {
    asyncAdd() {
      setTimeout(() => {
        dispatch(this.add());
      }, 2000);
    },

    minus() {
      return {
        type: MINUS
      };
    },

    add() {
      return {
        type: ADD
      };
    }
  };

  return actions;
};
