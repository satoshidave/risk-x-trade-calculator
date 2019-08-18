import { ADD_LONG } from '../utils/types';

const addLong = (position) => dispatch => dispatch({ type: ADD_LONG, payload: position })

export {
  addLong,
}
