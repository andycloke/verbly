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
  spanishInfinitive: string
): Conjugation => getAllConjugations(state)[spanishInfinitive];

export const getConjugationInTenseForPerson = (
  state: any,
  spanishInfinitive: string,
  tense: string,
  person: string
): string[] => getSingleConjugation(state, spanishInfinitive)[tense][person];

export const isVerbIrregular = (
  state: any,
  spanishInfinitive: string
): boolean => getSingleConjugation(state, spanishInfinitive).irregular;

export const isVerbReflexive = (
  state: any,
  spanishInfinitive: string
): boolean => getSingleConjugation(state, spanishInfinitive).reflexive;

export const isVerbCommon = (state: any, spanishInfinitive: string): boolean =>
  getSingleConjugation(state, spanishInfinitive).common;

export const getEnglishInfinitive = (
  state: any,
  spanishInfinitive: string
): string => getSingleConjugation(state, spanishInfinitive).englishInfinitive;

export const getAllInfinitves = (state: any): Array<string> =>
  Object.keys(getAllConjugations(state));

export const getListOfAllConjugations = (state: any): Array<Conjugation> =>
  Object.values(getAllConjugations(state));

export const getVerbsFilteredByUserOptions = (state: any): Array<string> => {
  return getAllInfinitves(state)
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
