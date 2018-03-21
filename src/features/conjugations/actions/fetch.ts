import conjugationsService from '../../../service/conjugations';
// import { setGameVerbs } from '../../game/actions';
// import { Conjugation } from '../models/Conjugation';
import { receiveConjugations } from './';
import { areConjugationsFetched, areConjugationsFetching } from '../selectors';

export const actionTypes = {
  START_FETCHING_CONJUGATIONS: 'conjugations/fetch/START_FETCHING_CONJUGATIONS',
  SUCCESS_FETCHING_CONJUGATIONS:
    'conjugations/fetch/SUCCESS_FETCHING_CONJUGATIONS',
  ERROR_FETCHING_CONJUGATIONS: 'conjugations/fetch/ERROR_FETCHING_CONJUGATIONS'
};

export const startFetchingConjugations = () => ({
  type: actionTypes.START_FETCHING_CONJUGATIONS
});

export const successFetchingConjugations = () => ({
  type: actionTypes.SUCCESS_FETCHING_CONJUGATIONS
});

export const errorFetchingConjugations = () => ({
  type: actionTypes.ERROR_FETCHING_CONJUGATIONS
});

export const fetchConjugationsIfNotFetched = () => {
  return async function(dispatch: any, getState: any) {
    const state = getState();
    if (!areConjugationsFetched(state) && !areConjugationsFetching(state)) {
      dispatch(startFetchingConjugations());
      const conjugations = await conjugationsService.fetchConjugations();
      dispatch(successFetchingConjugations());
      dispatch(receiveConjugations(conjugations));
    }
  };
};
