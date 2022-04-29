import { combineReducers, compose, applyMiddleware } from "redux";
import { configureStore } from "@reduxjs/toolkit"
import thunk from "redux-thunk";

import appReducer from "./AppDucks";
import mainpageReducer from "./MainpageDucks";

// combine our reducers
const reducer = combineReducers({
    app: appReducer,
    mainpage: mainpageReducer
});

// enable the redux extension in google
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// create the store
const store = configureStore({ reducer }, composeEnhancers(applyMiddleware(thunk)));

export default store;
