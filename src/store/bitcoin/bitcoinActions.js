import axios from "axios";
import {
  GET_BITCOIN_DATA_PENDING,
  GET_BITCOIN_DATA_SUCCESS,
  GET_BITCOIN_DATA_ERROR,
} from "./bitcoinTypes";

export const getBitcoinData = () => async (dispatch, getState) => {
  try {
    dispatch({
        type: GET_BITCOIN_DATA_PENDING
    });
    const { data } = await axios(
      `https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=cad&days=30&interval=daily`
    );

    const { data: dataHourly } = await axios(
      `https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=cad&days=1&interval=hourly`
    );
    dispatch({
        type: GET_BITCOIN_DATA_SUCCESS,
        payload: {
          data: data,
          dataHourly: dataHourly
        }
    });
  } catch (err) {
    dispatch({
        type: GET_BITCOIN_DATA_ERROR,
    });
  }
};


