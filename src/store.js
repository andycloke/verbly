import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

import options from './features/options/reducers';
import peopleInPlay from './features/menu/features/people/reducers';
import tensesInPlay from './features/menu/features/tenses/reducers';
import verbsInPlay from './features/menu/features/verbs/reducers';
import game from './features/game/reducers';
import conjugations from './features/conjugations/reducers';
import stats from './features/stats/reducers';

const reducer = combineReducers({
  options,
  peopleInPlay,
  tensesInPlay,
  verbsInPlay,
  game,
  conjugations,
  stats
});

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

export default store;
