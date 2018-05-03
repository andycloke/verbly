import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import persistConfig from './persistConfig';
import options from './features/options/reducers';
import peopleInPlay from './features/menu/features/people/reducers';
import tensesInPlay from './features/menu/features/tenses/reducers';
import verbsInPlay from './features/menu/features/verbs/reducers';
import game from './features/game/reducers';
import conjugations from './features/conjugations/reducers';
import stats from './features/stats/reducers';
import scores from './features/scores/reducers';

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
