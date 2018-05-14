import {
  VerbsInPlay,
  VerbsIncludedOptions,
  WhichVerbsOptions
} from '../models';
import { EndingsInPlay, VerbEndingOptions } from '../models/endings';
import { StateProps as VerbsMenuStateProps } from '../containers/VerbsMenu';
// TODO: shouldnt be importing from features
import {
  getAllInfinitives,
  getNumberOfVerbsInPlay
} from '../../../../../../features/conjugations/selectors';
import {
  IRREGULAR_DIFFICULTIES,
  REFLEXIVE_DIFFICULTIES,
  WHICH_VERBS_DIFFICULTIES
} from '../constants/difficulties';

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
  const verbs = getAllInfinitives(state);
  return getUserDefinedVerbs(state).filter((verb: string) =>
    verbs.includes(verb)
  );
};

export const moreThanOneVerbInPlay = (state: any): boolean =>
  getNumberOfVerbsInPlay(state) > 0;

export const getVerbEndingsInPlay = (state: any): EndingsInPlay =>
  getVerbsInPlaySlice(state).endings;

export const getErVerbsInPlay = (state: any): boolean =>
  getVerbEndingsInPlay(state)[VerbEndingOptions.Er];

export const getArVerbsInPlay = (state: any): boolean =>
  getVerbEndingsInPlay(state)[VerbEndingOptions.Ar];

export const getIrVerbsInPlay = (state: any): boolean =>
  getVerbEndingsInPlay(state)[VerbEndingOptions.Ir];

export const getVerbsMenuProps = (state: any): VerbsMenuStateProps => ({
  reflexive: getReflexiveVerbsInPlay(state),
  irregular: getIrregularVerbsInPlay(state),
  whichVerbs: getWhichVerbsInPlay(state),
  userDefinedVerbs: getUserDefinedVerbs(state),
  erVerbsInPlay: getErVerbsInPlay(state),
  irVerbsInPlay: getIrVerbsInPlay(state),
  arVerbsInPlay: getArVerbsInPlay(state)
});

export const getVerbsDifficultyFactor = (state: any): number =>
  IRREGULAR_DIFFICULTIES[getIrregularVerbsInPlay(state)] +
  REFLEXIVE_DIFFICULTIES[getReflexiveVerbsInPlay(state)] +
  WHICH_VERBS_DIFFICULTIES[getWhichVerbsInPlay(state)];
