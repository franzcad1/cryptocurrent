import axios from "axios";
import {
  GET_BITCOIN_DATA_PENDING,
  GET_BITCOIN_DATA_SUCCESS,
  GET_BITCOIN_DATA_ERROR,
} from "./bitcoinTypes";

const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

export const getBitcoinData = () => async (dispatch, getState) => {
  const { lastFetched } = getState().bitcoin;
  const { data } = getState().bitcoin;
  if (data && lastFetched && Date.now() - lastFetched < CACHE_DURATION) return;
  try {
    dispatch({
        type: GET_BITCOIN_DATA_PENDING
    });
    const { data } = await axios(
      `https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=cad&days=30&interval=daily`
    );

    const { data: dataHourly } = await axios(
      `https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=cad&days=2`
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


