import { receiveConjugations } from '../../../core/features/conjugations/actions';
import conjugationsService from '../../../service/conjugations';
import { getConjugationsFetched, getConjugationsFetching } from '../selectors';

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
    if (!getConjugationsFetched(state) && !getConjugationsFetching(state)) {
      dispatch(startFetchingConjugations());
      const conjugations = await conjugationsService.fetchConjugations();
      dispatch(receiveConjugations(conjugations));
      dispatch(successFetchingConjugations());
    }
  };
};
