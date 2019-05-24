import { Dispatch } from 'types';

import { CLEAN, INIT } from './constant';

export default (dispatch: Dispatch) => {
  const actions = {
    /**
     * 初始化
     */
    async init() {
      dispatch({ type: INIT });
    },

    /**
     * 重置
     */
    async clean() {
      dispatch({ type: CLEAN });
    }
  };

  return { ...actions };
};
