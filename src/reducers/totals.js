import { ADD_LONG, ADD_SHORT, REMOVE_LONG, REMOVE_SHORT, COLLATERAL, PERCENTAGE } from '../utils/types';
import { filter } from 'lodash';

const INITIAL_STATE = {
  longs: [],
  shorts: [],
  collateral: 0,
  percentage: 1,
}

const totals = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
  case COLLATERAL:
    return {
      ...state,
      collateral: payload,
    }
  case PERCENTAGE:
    return {
      ...state,
      percentage: payload,
    }
  case ADD_LONG:
    return {
      ...state,
      longs: [...state.longs, payload],
    }
  case ADD_SHORT:
    return {
      ...state,
      shorts: [...state.shorts, payload],
    }
  case REMOVE_LONG:
    return {
      ...state,
      longs: filter(state.longs, ({ id }) => id !== payload),
    }
  case REMOVE_SHORT:
    return {
      ...state,
      shorts: filter(state.shorts, ({ id }) => id !== payload),
    }
  default:
    return state;
  }
}

export default totals;
