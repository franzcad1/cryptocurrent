import { GET_GLOBAL_PENDING, GET_GLOBAL_SUCCESS, GET_GLOBAL_ERROR } from "./globalTypes";

const initialState = {
  data: null,
  isLoading: false,
  hasError: false,
  lastFetched: null,
};

function globalReducer(state = initialState, action) {
  switch (action.type) {
    case GET_GLOBAL_PENDING:
      return { ...state, isLoading: true, hasError: false };
    case GET_GLOBAL_SUCCESS:
      return { ...state, data: action.payload, isLoading: false, hasError: false, lastFetched: Date.now() };
    case GET_GLOBAL_ERROR:
      return { ...state, isLoading: false, hasError: true };
    default:
      return state;
  }
}

export default globalReducer;
