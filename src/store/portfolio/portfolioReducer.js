import { ADD_HOLDING, DELETE_HOLDING, UPDATE_HOLDING_PRICE } from "./portfolioTypes";

const initialState = {
  holdings: [],
};

function portfolioReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_HOLDING:
      return { ...state, holdings: [...state.holdings, action.payload] };
    case DELETE_HOLDING:
      return {
        ...state,
        holdings: state.holdings.filter((h) => h.coinID !== action.payload),
      };
    case UPDATE_HOLDING_PRICE:
      return {
        ...state,
        holdings: state.holdings.map((h) =>
          h.coinID === action.payload.coinID
            ? { ...h, cachedPrice: action.payload.price, lastUpdated: Date.now() }
            : h
        ),
      };
    default:
      return state;
  }
}

export default portfolioReducer;
