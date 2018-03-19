import { Conjugation } from '../models/Conjugation';

export const actionTypes = {
  RECEIVE_CONJUGATIONS: 'conjugations/RECEIVE_CONJUGATIONS'
};

export const receiveConjugations = (conjugations: Array<Conjugation>) => ({
  type: actionTypes.RECEIVE_CONJUGATIONS,
  payload: {
    conjugations
  }
});
