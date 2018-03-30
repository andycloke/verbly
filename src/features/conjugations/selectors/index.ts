import {
  irregularVerbsOnly,
  irregularVerbsIncluded,
  irregularVerbsExcluded,
  reflexiveVerbsIncluded,
  reflexiveVerbsExcluded,
  reflexiveVerbsOnly,
  commonVerbsOnly,
  allVerbsInPlay,
  userDefinedVerbsOnly,
  getValidUserDefinedVerbs
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
  verb: string
): Conjugation => getAllConjugations(state)[verb];

export const getConjugationInTenseForPerson = (
  state: any,
  verb: string,
  tense: string,
  person: string
): string[] => getSingleConjugation(state, verb)[tense][person];

export const isVerbIrregular = (
  state: any,
  verb: string
): boolean => getSingleConjugation(state, verb).irregular;

export const isVerbReflexive = (
  state: any,
  verb: string
): boolean => getSingleConjugation(state, verb).reflexive;

export const isVerbCommon = (state: any, verb: string): boolean =>
  getSingleConjugation(state, verb).common;

export const getEnglishInfinitive = (
  state: any,
  verb: string
): string => getSingleConjugation(state, verb).englishInfinitive;

export const getAllInfinitives = (state: any): Array<string> =>
  Object.keys(getAllConjugations(state));

export const getListOfAllConjugations = (state: any): Array<Conjugation> =>
  Object.values(getAllConjugations(state));

export const getVerbsFilteredByUserOptions = (state: any): Array<string> => {
  return getAllInfinitives(state)
    .filter(
      (infinitive: string): boolean =>
        (irregularVerbsOnly(state) && isVerbIrregular(state, infinitive)) ||
        (irregularVerbsExcluded(state) &&
          !isVerbIrregular(state, infinitive)) ||
        irregularVerbsIncluded(state)
    )
    .filter(
      (infinitive: string): boolean =>
        (reflexiveVerbsOnly(state) && isVerbReflexive(state, infinitive)) ||
        (reflexiveVerbsExcluded(state) &&
          !isVerbReflexive(state, infinitive)) ||
        reflexiveVerbsIncluded(state)
    )
    .filter(
      (infinitive: string): boolean =>
        (commonVerbsOnly(state) && isVerbCommon(state, infinitive)) ||
        allVerbsInPlay(state) ||
        (userDefinedVerbsOnly(state) &&
          getValidUserDefinedVerbs(state).includes(infinitive))
    );
};

export {
  getConjugationsFetching,
  getConjugationsFetched,
  getConjugationsFetchError
};
