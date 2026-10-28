import { ADD_HOLDING, DELETE_HOLDING, UPDATE_HOLDING_PRICE } from "./portfolioTypes";

export const addHolding = (holding) => ({
  type: ADD_HOLDING,
  payload: holding,
});

export const deleteHolding = (coinID) => ({
  type: DELETE_HOLDING,
  payload: coinID,
});

export const updateHoldingPrice = (coinID, price) => ({
  type: UPDATE_HOLDING_PRICE,
  payload: { coinID, price },
});
