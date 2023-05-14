import axios from "axios";
import {
  GET_COIN_PENDING,
  GET_COIN_SUCCESS,
  GET_COIN_ERROR,
} from "./coinTypes";

export const getCoin = (id, range) => async (dispatch, getState) => {
  try {
    dispatch({ type: GET_COIN_PENDING });
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
      },
    });
  } catch (err) {
    dispatch({ type: GET_COIN_ERROR });
  }
};
