import axios from "axios";
import {
  GET_BITCOIN_DATA_PENDING,
  GET_BITCOIN_DATA_SUCCESS,
  GET_BITCOIN_DATA_ERROR,
  GET_BITCOIN_HOURLY_DATA_PENDING,
  GET_BITCOIN_HOURLY_DATA_SUCCESS,
  GET_BITCOIN_HOURLY_DATA_ERROR,
} from "./bitcoinTypes";

export const getBitcoinData = () => async (dispatch, getState) => {
  try {
    dispatch({
        type: GET_BITCOIN_DATA_PENDING
    });
    const { data } = await axios(
      `https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=cad&days=30&interval=daily`
    );
    dispatch({
        type: GET_BITCOIN_DATA_SUCCESS,
        payload: data
    });
  } catch (err) {
    dispatch({
        type: GET_BITCOIN_DATA_ERROR,
    });
  }
};

export const getBitcoinDataHourly = () => async (dispatch, getState) => {
  try {
    dispatch({
        type: GET_BITCOIN_HOURLY_DATA_PENDING
    });
    const { data } = await axios(
      `https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=cad&days=1&interval=hourly`
    );
    dispatch({
        type: GET_BITCOIN_HOURLY_DATA_SUCCESS,
        payload: data
    });
  } catch (err) {
    dispatch({
        type: GET_BITCOIN_HOURLY_DATA_ERROR,
    });
  }
};
