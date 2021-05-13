import {combineReducers, createStore} from "redux";
import productsReducer from "./productsReducer";
import {applyMiddleware} from "redux";
import thunkMiddleWare from "redux-thunk";
import commentsReducer from "./commentsReducer";

const reducers = combineReducers({
    productsData: productsReducer,
    commentsData: commentsReducer
})

export default createStore(reducers, applyMiddleware(thunkMiddleWare));