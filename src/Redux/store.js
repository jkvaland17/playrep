import { createStore, applyMiddleware } from 'redux';
import { withExtraArgument } from 'redux-thunk';
import axiosClient from "../api/axiosClient";
import rootReducer from "../rootReducer";

const store = createStore(rootReducer, applyMiddleware(withExtraArgument(axiosClient)));

export default store;
