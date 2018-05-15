import { Fetch } from '../models';

export const getConjugationsFetchSlice = (state: any): Fetch =>
  state.conjugationsFetch;

export const getConjugationsFetching = (state: any): boolean =>
  getConjugationsFetchSlice(state).fetching;

export const getConjugationsFetched = (state: any): boolean =>
  getConjugationsFetchSlice(state).fetched;

export const getConjugationsFetchError = (state: any): boolean =>
  getConjugationsFetchSlice(state).error;
