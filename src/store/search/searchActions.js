import axios from "axios";
import {
  SEARCH_COINS_PENDING,
  SEARCH_COINS_SUCCESS,
  SEARCH_COINS_ERROR,
} from "./searchTypes";

const CACHE_DURATION = 5 * 60 * 1000;

export const searchCoinData = (searchVal) => async (dispatch, getState) => {
  const query = searchVal.toLowerCase().trim();
  if (!query) return;

  const cached = getState().search.queryCache[query];
  if (cached && Date.now() - cached.lastFetched < CACHE_DURATION) {
    dispatch({
      type: SEARCH_COINS_SUCCESS,
      payload: { coins: cached.coins, query },
    });
    return;
  }

  try {
    dispatch({ type: SEARCH_COINS_PENDING });
    const { data } = await axios(
      `https://api.coingecko.com/api/v3/search?query=${encodeURIComponent(query)}`
    );
    dispatch({
      type: SEARCH_COINS_SUCCESS,
      payload: { coins: data.coins || [], query },
    });
  } catch (err) {
    dispatch({ type: SEARCH_COINS_ERROR });
  }
};
