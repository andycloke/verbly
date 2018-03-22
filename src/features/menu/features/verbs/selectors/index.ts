import {
  VerbsInPlay,
  VerbsIncludedOptions,
  WhichVerbsOptions
} from '../models';

export const getVerbsInPlay = (state: any): VerbsInPlay => state.verbsInPlay;

export const getIrregularVerbsInPlay = (state: any): VerbsIncludedOptions =>
  getVerbsInPlay(state).irregular;

export const irregularVerbsIncluded = (state: any): boolean =>
  getIrregularVerbsInPlay(state) === VerbsIncludedOptions.Include;

export const irregularVerbsExcluded = (state: any): boolean =>
  getIrregularVerbsInPlay(state) === VerbsIncludedOptions.Exclude;

export const irregularVerbsOnly = (state: any): boolean =>
  getIrregularVerbsInPlay(state) === VerbsIncludedOptions.Only;

export const getReflexiveVerbsInPlay = (state: any): VerbsIncludedOptions =>
  getVerbsInPlay(state).reflexive;

export const reflexiveVerbsIncluded = (state: any): boolean =>
  getReflexiveVerbsInPlay(state) === VerbsIncludedOptions.Include;

export const reflexiveVerbsExcluded = (state: any): boolean =>
  getReflexiveVerbsInPlay(state) === VerbsIncludedOptions.Exclude;

export const reflexiveVerbsOnly = (state: any): boolean =>
  getReflexiveVerbsInPlay(state) === VerbsIncludedOptions.Only;

export const getWhichVerbsInPlay = (state: any): WhichVerbsOptions =>
  getVerbsInPlay(state).whichVerbs;

export const commonVerbsOnly = (state: any): boolean =>
  getWhichVerbsInPlay(state) === WhichVerbsOptions.Common;

export const allVerbsInPlay = (state: any): boolean =>
  getWhichVerbsInPlay(state) === WhichVerbsOptions.All;
