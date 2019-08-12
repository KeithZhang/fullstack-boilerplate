const INITIAL_STATE = {
  loading: false
};

export type IGoodsListReducer = typeof INITIAL_STATE;

export default function reducer(state = INITIAL_STATE, action: any) {
  const { type, payload } = action;
  switch (type) {
    default:
      return state;
  }
}
