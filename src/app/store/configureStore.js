import { createStore } from "redux";
import rooReducer from "../reducers/rootReducer";
import { devToolsEnhancer } from 'redux-devtools-extension';

export const configureStore = () => {
    const store = createStore(rooReducer,devToolsEnhancer())
    return store
}