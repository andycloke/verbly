import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import persistConfig from './persistConfig';

import stats from './core/features/stats/reducers';
import scores from './core/features/scores/reducers';
import game from './core/features/game/reducers';
import tensesInPlay from './core/features/menu/features/tenses/reducers';
import peopleInPlay from './core/features/menu/features/people/reducers';
import verbsInPlay from './core/features/menu/features/verbs/reducers';
import options from './core/features/options/reducers';
import conjugations from './core/features/conjugations/reducers';

import conjugationsFetch from './features/conjugations/reducers';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducer = combineReducers({
  options,
  peopleInPlay,
  tensesInPlay,
  verbsInPlay,
  game,
  conjugations,
  conjugationsFetch,
  stats,
  scores
});

const persistedReducer = persistReducer(persistConfig, reducer);

export default () => {
  let store = createStore(
    persistedReducer,
    composeEnhancers(applyMiddleware(thunk))
  );
  let persistor = persistStore(store);
  return { store, persistor };
};
