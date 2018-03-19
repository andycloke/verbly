import conjugationsService from '../../../service/conjugations';
import { receiveConjugations } from './';

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

export const fetchConjugations = () => {
  return async function(dispatch: any) {
    dispatch(startFetchingConjugations());
    const conjugations = await conjugationsService.fetchConjugations();
    dispatch(receiveConjugations(conjugations));
    dispatch(successFetchingConjugations());
  };
};
