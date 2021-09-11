import { combineReducers, createStore } from "redux";
import { composeWidthDevTools } from 'redux-devtools-extension';
import contactReducer from './reducer';

const rootReducer = combineReducers({

    contacts: contactReducer,
});

const store = createStore(rootReducer, composeWidthDevTools());
export default store;