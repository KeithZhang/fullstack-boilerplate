import { CHANGE } from './constant';

export default (dispatch: any) => {
  const actions = {
    change() {
      return {
        type: CHANGE
      };
    }
  };

  return actions;
};
