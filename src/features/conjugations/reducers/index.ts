import { actionTypes } from '../actions';
import { combineReducers } from 'redux';
import {
  initialState,
  ConjugationsState,
  Conjugation
} from '../models/Conjugation';
import fetch from './fetch';

const conjugations = (
  conjugationsState: ConjugationsState = initialState,
  action: any
) => {
  switch (action.type) {
    case actionTypes.RECEIVE_CONJUGATIONS:
      return action.payload.conjugations.reduce(
        (cs: object, c: Conjugation) => {
          return {
            ...cs,
            [c.verb]: c
          };
        },
        {}
      );
    default:
      return conjugationsState;
  }
};

export default combineReducers({
  fetch,
  conjugations
});
