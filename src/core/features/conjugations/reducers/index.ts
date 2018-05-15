import { actionTypes } from '../actions';
import { initialState, ConjugationsState, Conjugation } from '../models';

export default (
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
