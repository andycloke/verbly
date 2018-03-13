import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

import options from './features/options/reducers';
import peopleInPlay from './features/people/reducers';
import tensesInPlay from './features/tenses/reducers';
import tensesInPlay from './features/tenses/reducers';
import verbsInPlay from './features/verbs/reducers';

const reducer = combineReducers({
  options,
  peopleInPlay,
  tensesInPlay,
  verbsInPlay
});

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

export default store;
