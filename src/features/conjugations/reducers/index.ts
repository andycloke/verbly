import { actionTypes } from '../actions';
import { combineReducers } from 'redux';
import { initialState, ConjugationsState } from '../models/Conjugation';
import fetch from './fetch';

const conjugations = (
  conjugationsState: ConjugationsState = initialState,
  action: any
) => {
  switch (action.type) {
    case actionTypes.RECEIVE_CONJUGATIONS:
      return [
        ...conjugationsState.conjugations,
        ...action.payload.conjugations
      ];
    default:
      return conjugationsState;
  }
};

export default combineReducers({
  fetch,
  conjugations
});
