import storage from 'redux-persist/lib/storage';

export default {
  key: 'root',
  storage,
  throttle: 5000,
  blacklist: ['game', 'conjugations', 'verbsInPlay']
};
