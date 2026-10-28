import {
  SEARCH_COINS_PENDING,
  SEARCH_COINS_SUCCESS,
  SEARCH_COINS_ERROR,
} from "./searchTypes";

const initialState = {
  coins: null,
  queryCache: {},
  isLoading: false,
  hasError: false,
};

function searchReducer(state = initialState, action) {
  switch (action.type) {
    case SEARCH_COINS_PENDING:
      return { ...state, isLoading: true, hasError: false };
    case SEARCH_COINS_SUCCESS:
      return {
        ...state,
        coins: action.payload.coins,
        queryCache: {
          ...state.queryCache,
          [action.payload.query]: {
            coins: action.payload.coins,
            lastFetched: Date.now(),
          },
        },
        isLoading: false,
        hasError: false,
      };
    case SEARCH_COINS_ERROR:
      return { ...state, isLoading: false, hasError: true };
    default:
      return state;
  }
}

export default searchReducer;
