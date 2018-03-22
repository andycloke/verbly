import {
  VerbsInPlay,
  VerbsIncludedOptions,
  WhichVerbsOptions
} from '../models';

export const getVerbsInPlay = (state: any): VerbsInPlay => state.verbsInPlay;

export const getIrregularVerbsInPlay = (state: any): VerbsIncludedOptions =>
  getVerbsInPlay(state).irregular;

export const getReflexiveVerbsInPlay = (state: any): VerbsIncludedOptions =>
  getVerbsInPlay(state).reflexive;

export const getWhichVerbsInPlay = (state: any): WhichVerbsOptions =>
  getVerbsInPlay(state).whichVerbs;
