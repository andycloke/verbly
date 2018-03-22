import {
  VerbsIncludedOptions,
  WhichVerbsOptions
} from '../../menu/features/verbs/models';
import {
  getIrregularVerbsInPlay,
  getReflexiveVerbsInPlay,
  getWhichVerbsInPlay
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
  const irregularVerbsInPlayOption = getIrregularVerbsInPlay(state);
  // TODO: which verbs - user specified
  let filteredVerbs = allInfinitives.filter(
    (infinitive: string): boolean =>
      (irregularVerbsInPlayOption === VerbsIncludedOptions.Only &&
        isVerbIrregular(state, infinitive)) ||
      (irregularVerbsInPlayOption === VerbsIncludedOptions.Exclude &&
        !isVerbIrregular(state, infinitive))
  );
  const reflexiveVerbsInPlayOption = getReflexiveVerbsInPlay(state);
  filteredVerbs = filteredVerbs.filter(
    (infinitive: string): boolean =>
      (reflexiveVerbsInPlayOption === VerbsIncludedOptions.Only &&
        isVerbReflexive(state, infinitive)) ||
      (reflexiveVerbsInPlayOption === VerbsIncludedOptions.Exclude &&
        !isVerbReflexive(state, infinitive))
  );
  const commonVerbsOption = getWhichVerbsInPlay(state);
  filteredVerbs = filteredVerbs.filter(
    (infinitive: string): boolean =>
      commonVerbsOption === WhichVerbsOptions.Common &&
      isVerbCommon(state, infinitive)
  );
  return filteredVerbs;
};

export {
  getConjugationsFetching,
  getConjugationsFetched,
  getConjugationsFetchError
};
