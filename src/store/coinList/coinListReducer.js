import {
  GET_COINS_PENDING,
  GET_COINS_SUCCESS,
  GET_COINS_ERROR,
  GET_MORE_COINS_PENDING,
  GET_MORE_COINS_SUCCESS,
  GET_MORE_COINS_ERROR,
} from "./coinListTypes";

const initialState = {
    coins: [],
    isLoading: false,
    hasError: false,
    page: 1
};

function coinListReducer(state = initialState, action) {
  switch (action.type) {
    case GET_COINS_PENDING:
      return {
        ...state,
        isLoading: true,
      };
    case GET_COINS_SUCCESS:
      return {
        ...state,
        coins: action.payload,
        isLoading: false,
      };
    case GET_COINS_ERROR:
      return {
        ...state,
        isLoading: false,
        hasError: true,
      };
      case GET_MORE_COINS_PENDING:
        return {
          ...state,
          isLoading: true,
        };
      case GET_MORE_COINS_SUCCESS:
        return {
          ...state,
          coins: [...state.coins, ...action.payload],
          isLoading: false,
        };
      case GET_MORE_COINS_ERROR:
        return {
          ...state,
          isLoading: false,
          hasError: true,
        };
    default:
      return state;
  }
}

export default coinListReducer;