import { actionTypes } from '../actions/fetch';
import { initialState, Fetch } from '../models/Fetch';

export default (fetch: Fetch = initialState, action: any) => {
  switch (action.type) {
    case actionTypes.START_FETCHING_CONJUGATIONS:
      return {
        ...fetch,
        fetching: true
      };
    case actionTypes.SUCCESS_FETCHING_CONJUGATIONS:
      return {
        ...fetch,
        fetching: false,
        fetched: true
      };
    case actionTypes.ERROR_FETCHING_CONJUGATIONS:
      return {
        ...fetch,
        fetching: false,
        error: true
      };
    default:
      return fetch;
  }
};
