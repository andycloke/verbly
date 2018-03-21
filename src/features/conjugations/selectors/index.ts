import { Fetch } from '../models/Fetch';

export const getConjugationsSlice = (state: any) => state.conjugations;

export const getConjugationsFetchStatus = (state: any): Fetch =>
  getConjugationsSlice(state).fetch;

export const areConjugationsFetching = (state: any): boolean =>
  getConjugationsFetchStatus(state).fetching;

export const areConjugationsFetched = (state: any): boolean =>
  getConjugationsFetchStatus(state).fetched;

export const conjugationsFetchError = (state: any): boolean =>
  getConjugationsFetchStatus(state).error;
