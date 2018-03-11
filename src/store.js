import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

import options from './features/options/reducers';

const reducer = combineReducers({
  options
});

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

export default store;
