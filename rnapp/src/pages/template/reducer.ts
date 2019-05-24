import { Action } from 'types';

import { CLEAN, INIT } from './constant';

const INITIAL_STATE = {};

export type ITemplateReducer = typeof INITIAL_STATE;

export default function Template(
  state = INITIAL_STATE,
  action: Action
): ITemplateReducer {
  const { type, payload } = action;
  switch (type) {
    case INIT:
      return state;

    case CLEAN:
      return INITIAL_STATE;
  }
  return state;
}
