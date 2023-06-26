import axios from "axios";
import {
  SEARCH_COINS_PENDING,
  SEARCH_COINS_SUCCESS,
  SEARCH_COINS_ERROR,
} from "./searchTypes";

export const searchCoinData = (searchVal) => async (dispatch, getState) => {
  try {
    dispatch({
      type: SEARCH_COINS_PENDING,
    });
    const { data } = await axios(
      "https://api.coingecko.com/api/v3/search?locale=en"
    );
    const coins = data.coins.filter(el => el.id.startsWith(searchVal) || el.name.startsWith(searchVal) || el.symbol.startsWith(searchVal));
    dispatch({
      type: SEARCH_COINS_SUCCESS,
      payload: {
        data: data,
        coins: coins
      },
    });
  } catch (err) {
    dispatch({
      type: SEARCH_COINS_ERROR,
    });
  }
};
