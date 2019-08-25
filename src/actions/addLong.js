import { COLLATERAL } from "../utils/types";

const addPosition = (type, position) => dispatch => dispatch({ type, payload: position });

const updateCollateral = collateral => dispatch => dispatch({ type: COLLATERAL, payload: collateral });

export {
  addPosition,
  updateCollateral,
}
