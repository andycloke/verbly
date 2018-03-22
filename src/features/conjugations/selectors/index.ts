import { Fetch } from '../models/Fetch';

export const getConjugationsSlice = (state: any) => state.conjugations;

export const getConjugationsFetchStatus = (state: any): Fetch =>
  getConjugationsSlice(state).fetch;

export const getConjugationsFetching = (state: any): boolean =>
  getConjugationsFetchStatus(state).fetching;

export const getConjugationsFetched = (state: any): boolean =>
  getConjugationsFetchStatus(state).fetched;

export const getConjugationsFetchError = (state: any): boolean =>
  getConjugationsFetchStatus(state).error;
