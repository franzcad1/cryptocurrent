import axios from "axios";
import { GET_GLOBAL_PENDING, GET_GLOBAL_SUCCESS, GET_GLOBAL_ERROR } from "./globalTypes";

const CACHE_DURATION = 5 * 60 * 1000;

export const getGlobalData = () => async (dispatch, getState) => {
  const { data, lastFetched } = getState().global;
  if (data && lastFetched && Date.now() - lastFetched < CACHE_DURATION) return;
  try {
    dispatch({ type: GET_GLOBAL_PENDING });
    const { data: res } = await axios("https://api.coingecko.com/api/v3/global");
    dispatch({ type: GET_GLOBAL_SUCCESS, payload: res.data });
  } catch (err) {
    dispatch({ type: GET_GLOBAL_ERROR });
  }
};
