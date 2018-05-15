import { Conjugation } from '../models';

export const actionTypes = {
  RECEIVE_CONJUGATIONS: 'conjugations/RECEIVE_CONJUGATIONS'
};

export const receiveConjugations = (conjugations: Array<Conjugation>) => ({
  type: actionTypes.RECEIVE_CONJUGATIONS,
  payload: {
    conjugations
  }
});
