import { GET_COIN_PENDING, GET_COIN_SUCCESS, GET_COIN_ERROR } from "./coinTypes";
const initialState = {
  coinData: null,
  chartData: null,
  isLoading: false,
  hasError: false,
};

function coinReducer(state = initialState, action) {
  switch (action.type) {
    case GET_COIN_PENDING:
      return {
        ...state,
        isLoading: true,
      };
    case GET_COIN_SUCCESS:
      return {
        ...state,
        ...action.payload,
        isLoading: false,
      };
    case GET_COIN_ERROR:
      return {
        ...state,
        isLoading: false,
        hasError: true,
      };
    default:
      return state;
  }
}

export default coinReducer;
