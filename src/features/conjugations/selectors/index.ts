import {
  irregularVerbsOnly,
  irregularVerbsIncluded,
  irregularVerbsExcluded,
  reflexiveVerbsIncluded,
  reflexiveVerbsExcluded,
  reflexiveVerbsOnly,
  commonVerbsOnly,
  allVerbsInPlay
} from '../../menu/features/verbs/selectors';
import { Conjugation } from '../models/Conjugation';

import {
  getConjugationsFetching,
  getConjugationsFetched,
  getConjugationsFetchError
} from './fetch';

export const getConjugationsSlice = (state: any) => state.conjugations;

export const getAllConjugations = (state: any) =>
  getConjugationsSlice(state).conjugations;

export const getSingleConjugation = (
  state: any,
  infinitive: string
): Conjugation => getAllConjugations(state)[infinitive];

export const isVerbIrregular = (state: any, infinitive: string): boolean =>
  getSingleConjugation(state, infinitive).irregular;

export const isVerbReflexive = (state: any, infinitive: string): boolean =>
  getSingleConjugation(state, infinitive).reflexive;

export const isVerbCommon = (state: any, infinitive: string): boolean =>
  getSingleConjugation(state, infinitive).common;

export const getAllInfinitves = (state: any): Array<string> =>
  Object.keys(getAllConjugations(state));

export const getListOfAllConjugations = (state: any): Array<Conjugation> =>
  Object.values(getAllConjugations(state));

export const getVerbsFilteredByUserOptions = (state: any): Array<string> => {
  const allInfinitives = getAllInfinitves(state);
  // TODO: which verbs - user specified
  let filteredVerbs = allInfinitives.filter(
    (infinitive: string): boolean =>
      (irregularVerbsOnly(state) && isVerbIrregular(state, infinitive)) ||
      (irregularVerbsExcluded(state) && !isVerbIrregular(state, infinitive)) ||
      irregularVerbsIncluded(state)
  );
  if (!filteredVerbs.length) return [];
  filteredVerbs = filteredVerbs.filter(
    (infinitive: string): boolean =>
      (reflexiveVerbsOnly(state) && isVerbReflexive(state, infinitive)) ||
      (reflexiveVerbsExcluded(state) && !isVerbReflexive(state, infinitive)) ||
      reflexiveVerbsIncluded(state)
  );
  if (!filteredVerbs.length) return [];
  filteredVerbs = filteredVerbs.filter(
    (infinitive: string): boolean =>
      (commonVerbsOnly(state) && isVerbCommon(state, infinitive)) ||
      allVerbsInPlay(state)
  );
  return filteredVerbs;
};

export {
  getConjugationsFetching,
  getConjugationsFetched,
  getConjugationsFetchError
};
