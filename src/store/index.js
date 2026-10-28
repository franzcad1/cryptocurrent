import { compose, combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import bitcoinReducer from "./bitcoin/bitcoinReducer";
import coinListReducer from "./coinList/coinListReducer";
import coinReducer from "./coin/coinReducer";
import searchReducer from "./search/searchReducer";
import globalReducer from "./global/globalReducer";
import portfolioReducer from "./portfolio/portfolioReducer";

const CACHE_KEY = "cryptocurrent_cache";

const loadCache = () => {
  try {
    const raw = localStorage.getItem(CACHE_KEY);
    if (!raw) return undefined;
    const { bitcoin, search, coin, global: globalData, portfolio } = JSON.parse(raw);
    const validSearch = { coins: null, queryCache: search?.queryCache || {}, isLoading: false, hasError: false };
    return { bitcoin, search: validSearch, coin, global: globalData, portfolio };
  } catch {
    localStorage.removeItem(CACHE_KEY);
    return undefined;
  }
};

const saveCache = (state) => {
  try {
    const { bitcoin, search, coin, global: globalData, portfolio } = state;
    localStorage.setItem(CACHE_KEY, JSON.stringify({ bitcoin, search, coin, global: globalData, portfolio }));
  } catch {}
};

const errorCountReducer = (state = 0, action) => {
  if (action.type.endsWith("_ERROR")) return state + 1;
  return state;
};

const reducers = combineReducers({
    bitcoin: bitcoinReducer,
    coinList: coinListReducer,
    coin: coinReducer,
    search: searchReducer,
    global: globalReducer,
    portfolio: portfolioReducer,
    errorCount: errorCountReducer,
});

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

export const store = createStore(
  reducers,
  loadCache(),
  composeEnhancers(applyMiddleware(thunk))
);

store.subscribe(() => saveCache(store.getState()));