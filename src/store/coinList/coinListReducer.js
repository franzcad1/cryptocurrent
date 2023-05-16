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
    page: 1,
    hasMore: true,
    error: null
};

function coinListReducer(state = initialState, action) {
  switch (action.type) {
    case GET_COINS_PENDING:
      return {
        ...state,
        isLoading: true,
        hasError: false,
      };
    case GET_COINS_SUCCESS:
      return {
        ...state,
        coins: action.payload,
        isLoading: false,
        hasError: false,
      };
    case GET_COINS_ERROR:
      return {
        ...state,
        isLoading: false,
        hasError: true,
        error: action.payload
      };
      case GET_MORE_COINS_PENDING:
        return {
          ...state,
          isLoading: true,
          hasMore: true,
          hasError: false,
        };
      case GET_MORE_COINS_SUCCESS:
        return {
          ...state,
          ...action.payload,
          isLoading: false,
          hasMore: true,
          hasError: false,
        };
      case GET_MORE_COINS_ERROR:
        return {
          ...state,
          isLoading: false,
          hasError: true,
          hasMore: false,
          error: action.payload
        };
    default:
      return state;
  }
}

export default coinListReducer;
