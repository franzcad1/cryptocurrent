import {
  GET_BITCOIN_DATA_PENDING,
  GET_BITCOIN_DATA_SUCCESS,
  GET_BITCOIN_DATA_ERROR,
  GET_BITCOIN_HOURLY_DATA_PENDING,
  GET_BITCOIN_HOURLY_DATA_SUCCESS,
  GET_BITCOIN_HOURLY_DATA_ERROR,
} from "./bitcoinTypes";
const initialState = {
  data: null,
  dataHourly: null,
  isLoading: false,
  hasError: false,
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
        data: action.payload,
        isLoading: false,
      };
    case GET_BITCOIN_DATA_ERROR:
      return {
        ...state,
        isLoading: false,
        hasError: true,
      };
    case GET_BITCOIN_HOURLY_DATA_PENDING:
      return {
        ...state,
        isLoading: true,
      };
    case GET_BITCOIN_HOURLY_DATA_SUCCESS:
      return {
        ...state,
        dataHourly: action.payload,
        isLoading: false,
      };
    case GET_BITCOIN_HOURLY_DATA_ERROR:
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
