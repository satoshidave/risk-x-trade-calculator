import { ADD_LONG } from '../utils/types';

const INITIAL_STATE = {
  longs: [],
}

const totals = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
  case ADD_LONG:
    return {
      ...state,
      longs: [...state.longs, payload]
    }
  default:
    return state;
  }
}

export default totals;
