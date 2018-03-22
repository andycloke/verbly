import { Fetch } from '../models/Fetch';
import { getConjugationsSlice } from './';

export const getConjugationsFetchStatus = (state: any): Fetch =>
  getConjugationsSlice(state).fetch;

export const getConjugationsFetching = (state: any): boolean =>
  getConjugationsFetchStatus(state).fetching;

export const getConjugationsFetched = (state: any): boolean =>
  getConjugationsFetchStatus(state).fetched;

export const getConjugationsFetchError = (state: any): boolean =>
  getConjugationsFetchStatus(state).error;
