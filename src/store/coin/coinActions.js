import axios from "axios";
import {
  GET_COIN_PENDING,
  GET_COIN_SUCCESS,
  GET_COIN_ERROR,
  CHANGE_RANGE,
} from "./coinTypes";

const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

export const getCoin = (id) => async (dispatch, getState) => {
  const state = getState();
  const { lastFetched, lastFetchedId, lastFetchedRange } = state.coin;
  const { coinData } = state.coin;
  const range = state.coin.range;
  if (coinData && lastFetchedId === id && lastFetchedRange === range && lastFetched && Date.now() - lastFetched < CACHE_DURATION) return;
  try {
    dispatch({ type: GET_COIN_PENDING, payload: { switchingCoin: lastFetchedId !== id } });
    const { data } = await axios(
      `https://api.coingecko.com/api/v3/coins/${id}?localization=false&tickers=false&market_data=true&community_data=true&developer_data=false&sparkline=false`
    );
    const { data: chart } =
      await axios(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=cad&days=${range}
            `);
    dispatch({
      type: GET_COIN_SUCCESS,
      payload: {
        coinData: data,
        chartData: chart.prices,
        range,
      },
    });
  } catch (err) {
    dispatch({ type: GET_COIN_ERROR });
  }
};

export const changeRange = (newRange) => (dispatch, getState) => {
  dispatch({ type: CHANGE_RANGE, payload: newRange });
};
