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
  getValidUserDefinedVerbs,
  getErVerbsInPlay,
  getArVerbsInPlay,
  getIrVerbsInPlay
} from '../../../core/features/menu/features/verbs/selectors';
import { VerbEndingOptions } from '../../../core/features/menu/features/verbs/models/endings';
import { Conjugation } from '../models/Conjugation';

import {
  getConjugationsFetching,
  getConjugationsFetched,
  getConjugationsFetchError
} from './fetch';

export const getConjugationsSlice = (state: any) => state.conjugations;

export const getAllConjugations = (state: any) =>
  getConjugationsSlice(state).conjugations;

export const getSingleConjugation = (state: any, verb: string): Conjugation =>
  getAllConjugations(state)[verb];

export const getConjugationInTenseForPerson = (
  state: any,
  verb: string,
  tense: string,
  person: string
): string[] => getSingleConjugation(state, verb)[tense][person];

export const isVerbIrregular = (state: any, verb: string): boolean =>
  getSingleConjugation(state, verb).irregular;

export const isVerbReflexive = (state: any, verb: string): boolean =>
  getSingleConjugation(state, verb).reflexive;

export const isVerbCommon = (state: any, verb: string): boolean =>
  getSingleConjugation(state, verb).common;

export const getVerbEnding = (state: any, verb: string): VerbEndingOptions =>
  getSingleConjugation(state, verb).ending;

export const verbEndsInAr = (state: any, verb: string): boolean =>
  getVerbEnding(state, verb) === VerbEndingOptions.Ar;

export const verbEndsInEr = (state: any, verb: string): boolean =>
  getVerbEnding(state, verb) === VerbEndingOptions.Er;

export const verbEndsInIr = (state: any, verb: string): boolean =>
  getVerbEnding(state, verb) === VerbEndingOptions.Ir;

export const getEnglishInfinitive = (state: any, verb: string): string =>
  getSingleConjugation(state, verb).englishInfinitive;

export const getAllInfinitives = (state: any): Array<string> =>
  Object.keys(getAllConjugations(state));

export const getListOfAllConjugations = (state: any): Array<Conjugation> =>
  Object.values(getAllConjugations(state));

export const irregularVerbFilter = (state: any, infinitive: string): boolean =>
  userDefinedVerbsOnly(state) ||
  (irregularVerbsOnly(state) && isVerbIrregular(state, infinitive)) ||
  (irregularVerbsExcluded(state) && !isVerbIrregular(state, infinitive)) ||
  irregularVerbsIncluded(state);

export const reflexiveVerbFilter = (state: any, infinitive: string): boolean =>
  userDefinedVerbsOnly(state) ||
  (reflexiveVerbsOnly(state) && isVerbReflexive(state, infinitive)) ||
  (reflexiveVerbsExcluded(state) && !isVerbReflexive(state, infinitive)) ||
  reflexiveVerbsIncluded(state);

export const commonVerbFilter = (state: any, infinitive: string): boolean =>
  (commonVerbsOnly(state) && isVerbCommon(state, infinitive)) ||
  allVerbsInPlay(state) ||
  (userDefinedVerbsOnly(state) &&
    getValidUserDefinedVerbs(state).includes(infinitive));

export const filterVerbForEnding = (state: any, infinitive: string): boolean =>
  userDefinedVerbsOnly(state) ||
  (getErVerbsInPlay(state) && verbEndsInEr(state, infinitive)) ||
  (getArVerbsInPlay(state) && verbEndsInAr(state, infinitive)) ||
  (getIrVerbsInPlay(state) && verbEndsInIr(state, infinitive));

// TODO: add reselect
export const getVerbsFilteredByUserOptions = (state: any): Array<string> =>
  getAllInfinitives(state)
    .filter((infinitive: string) => irregularVerbFilter(state, infinitive))
    .filter((infinitive: string) => reflexiveVerbFilter(state, infinitive))
    .filter((infinitive: string) => commonVerbFilter(state, infinitive))
    .filter((infinitive: string) => filterVerbForEnding(state, infinitive));

export const getNumberOfVerbsInPlay = (state: any): number =>
  getVerbsFilteredByUserOptions(state).length;

export {
  getConjugationsFetching,
  getConjugationsFetched,
  getConjugationsFetchError
};
