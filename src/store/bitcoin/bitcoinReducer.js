import {
  GET_BITCOIN_DATA_PENDING,
  GET_BITCOIN_DATA_SUCCESS,
  GET_BITCOIN_DATA_ERROR,
} from "./bitcoinTypes";
const initialState = {
  data: null,
  dataHourly: null,
  isLoading: false,
  hasError: false,
  lastFetched: null,
};

function bitcoinReducer(state = initialState, action) {
  switch (action.type) {
    case GET_BITCOIN_DATA_PENDING:
      return {
        ...state,
        isLoading: true,
      };
    case GET_BITCOIN_DATA_SUCCESS:
      return {
        ...state,
        ...action.payload,
        isLoading: false,
        lastFetched: Date.now(),
      };
    case GET_BITCOIN_DATA_ERROR:
      return {
        ...state,
        isLoading: false,
        hasError: true,
      };
    default:
      return state;
  }
}

export default bitcoinReducer;
