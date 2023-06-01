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
      `https://cj4b5q.deta.dev/coins/?name_filter=${searchVal}`
    );
    console.log(data);
    dispatch({
      type: SEARCH_COINS_SUCCESS,
      payload: {
        data: data,
      },
    });
  } catch (err) {
    dispatch({
      type: SEARCH_COINS_ERROR,
    });
  }
};
