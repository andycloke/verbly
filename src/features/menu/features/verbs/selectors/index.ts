import {
  VerbsInPlay,
  VerbsIncludedOptions,
  WhichVerbsOptions
} from '../models';
import { StateProps as VerbsMenuStateProps } from '../containers/VerbsMenu';
import {
  getConjugationsFetched,
  getAllInfinitives
} from '../../../../conjugations/selectors';

export const getVerbsInPlaySlice = (state: any): VerbsInPlay =>
  state.verbsInPlay;

export const getIrregularVerbsInPlay = (state: any): VerbsIncludedOptions =>
  getVerbsInPlaySlice(state).irregular;

export const irregularVerbsIncluded = (state: any): boolean =>
  getIrregularVerbsInPlay(state) === VerbsIncludedOptions.Include;

export const irregularVerbsExcluded = (state: any): boolean =>
  getIrregularVerbsInPlay(state) === VerbsIncludedOptions.Exclude;

export const irregularVerbsOnly = (state: any): boolean =>
  getIrregularVerbsInPlay(state) === VerbsIncludedOptions.Only;

export const getReflexiveVerbsInPlay = (state: any): VerbsIncludedOptions =>
  getVerbsInPlaySlice(state).reflexive;

export const reflexiveVerbsIncluded = (state: any): boolean =>
  getReflexiveVerbsInPlay(state) === VerbsIncludedOptions.Include;

export const reflexiveVerbsExcluded = (state: any): boolean =>
  getReflexiveVerbsInPlay(state) === VerbsIncludedOptions.Exclude;

export const reflexiveVerbsOnly = (state: any): boolean =>
  getReflexiveVerbsInPlay(state) === VerbsIncludedOptions.Only;

export const getWhichVerbsInPlay = (state: any): WhichVerbsOptions =>
  getVerbsInPlaySlice(state).whichVerbs;

export const commonVerbsOnly = (state: any): boolean =>
  getWhichVerbsInPlay(state) === WhichVerbsOptions.Common;

export const allVerbsInPlay = (state: any): boolean =>
  getWhichVerbsInPlay(state) === WhichVerbsOptions.All;

export const userDefinedVerbsOnly = (state: any): boolean =>
  getWhichVerbsInPlay(state) === WhichVerbsOptions.UserDefined;

export const getUserDefinedVerbs = (state: any): Array<string> =>
  getVerbsInPlaySlice(state).userDefinedVerbs;

export const getValidUserDefinedVerbs = (state: any): Array<string> => {
  const spanishInfinitives = getAllInfinitives(state);
  return getUserDefinedVerbs(state).filter((verb: string) =>
    spanishInfinitives.includes(verb)
  );
};

export const getNumberOfValidUserDefinedVerbs = (state: any): number =>
  getValidUserDefinedVerbs(state).length;

export const enoughVerbsToStartGame = (state: any): boolean =>
  !(
    userDefinedVerbsOnly(state) && getNumberOfValidUserDefinedVerbs(state) === 0
  );

export const getVerbsMenuProps = (state: any): VerbsMenuStateProps => ({
  reflexive: getReflexiveVerbsInPlay(state),
  irregular: getIrregularVerbsInPlay(state),
  whichVerbs: getWhichVerbsInPlay(state),
  userDefinedVerbs: getUserDefinedVerbs(state),
  conjugationsFetched: getConjugationsFetched(state)
});
