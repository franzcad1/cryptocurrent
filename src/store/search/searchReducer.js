import {
  SEARCH_COINS_PENDING,
  SEARCH_COINS_SUCCESS,
  SEARCH_COINS_ERROR,
} from "./searchTypes";

const initialState = {
  data: null,
  isLoading: false,
  hasError: false,
};

function searchReducer(state = initialState, action) {
  switch (action.type) {
    case SEARCH_COINS_PENDING:
      return {
        ...state,
        isLoading: true,
      };
    case SEARCH_COINS_SUCCESS:
      return {
        ...state,
        data: action.payload,
        isLoading: false,
      };
    case SEARCH_COINS_ERROR:
      return {
        ...state,
        isLoading: false,
        hasError: true,
      };
    default:
      return state;
  }
}

export default searchReducer;
