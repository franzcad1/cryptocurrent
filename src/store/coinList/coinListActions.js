import axios from "axios";
import {
    GET_COINS_PENDING,
    GET_COINS_SUCCESS,
    GET_COINS_ERROR,
    GET_MORE_COINS_PENDING,
    GET_MORE_COINS_SUCCESS,
    GET_MORE_COINS_ERROR,
  } from "./coinListTypes";

  export const getCoinList = () => async (dispatch, getState) => {
    const state = getState();
    const page = state.coinList.page;
    try {
        dispatch({
            type: GET_COINS_PENDING
        });
        const { data } = await axios(
          `https://api.coingecko.com/api/v3/coins/markets?vs_currency=cad&order=market_cap_desc&per_page=10&page=${page}&sparkline=true&price_change_percentage=1h%2C24h%2C7d`
        );
        dispatch({
            type: GET_COINS_SUCCESS,
            payload: data
        });
      } catch (err) {
        dispatch({
            type: GET_COINS_ERROR,
        });
      }
  }

  export const getMoreCoinList = () => async (dispatch, getState) => {
    const state = getState();
    const page = state.coinList.page + 1;
    try {
        dispatch({
            type: GET_MORE_COINS_PENDING
        });
        const { data } = await axios(
          `https://api.coingecko.com/api/v3/coins/markets?vs_currency=cad&order=market_cap_desc&per_page=10&page=${page}&sparkline=true&price_change_percentage=1h%2C24h%2C7d`
        );
        dispatch({
            type: GET_MORE_COINS_SUCCESS,
            payload: {
              page: page,
              coins: [...state.coinList.coins, ...data],
            }
        });
      } catch (err) {
        dispatch({
            type: GET_MORE_COINS_ERROR,
        });
        console.log(err)
      }
  }