import { COLLATERAL, PERCENTAGE } from "../utils/types";

const addPosition = (type, position) => dispatch => dispatch({ type, payload: position });

const updateCollateral = collateral => dispatch => dispatch({ type: COLLATERAL, payload: collateral });

const updatePercentage = percentage => dispatch => dispatch({ type: PERCENTAGE, payload: percentage });

export {
  addPosition,
  updateCollateral,
  updatePercentage,
}
