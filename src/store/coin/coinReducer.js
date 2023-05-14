import {
  GET_COIN_PENDING,
  GET_COIN_SUCCESS,
  GET_COIN_ERROR,
  CHANGE_RANGE
} from "./coinTypes";
const initialState = {
  coinData: null,
  chartData: null,
  isLoading: false,
  hasError: false,
  range: "1",
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
    case CHANGE_RANGE:
      return {
        ...state,
        range: action.payload
      };
    default:
      return state;
  }
}

export default coinReducer;
