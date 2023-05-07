import { compose, combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import bitcoinReducer from "./bitcoin/bitcoinReducer";


const reducers = combineReducers({
    bitcoin: bitcoinReducer
});

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

export const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunk))
);