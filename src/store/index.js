import { compose, combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import bitcoinReducer from "./bitcoin/bitcoinReducer";
import coinListReducer from "./coinList/coinListReducer";
import coinReducer from "./coin/coinReducer";
import searchReducer from "./search/searchReducer";


const reducers = combineReducers({
    bitcoin: bitcoinReducer,
    coinList: coinListReducer,
    coin: coinReducer,
    search: searchReducer
});

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

export const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunk))
);