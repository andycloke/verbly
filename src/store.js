import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

import options from './features/options/reducers';
import peopleInPlay from './features/menu/features/people/reducers';
import tensesInPlay from './features/menu/features/tenses/reducers';
import verbsInPlay from './features/menu/features/verbs/reducers';
import game from './features/game/reducers';
import conjugations from './features/conjugations/reducers';
import stats from './features/stats/reducers';

const persistConfig = {
  key: 'root',
  storage,
  throttle: 5000
};

const reducer = combineReducers({
  options,
  peopleInPlay,
  tensesInPlay,
  verbsInPlay,
  game,
  conjugations,
  stats
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
