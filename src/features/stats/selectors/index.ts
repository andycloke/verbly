import { VerbTenseStats } from '../models';

export const getStatsSlice = (state: any): any => state.stats;

export const getTenseSlice = (state: any, tense: string): any =>
  getStatsSlice(state).hasOwnProperty(tense) ? getStatsSlice(state)[tense] : {};

export const getAllVerbsThatHaveStatsForTense = (
  state: any,
  tense: string
): string[] => Object.keys(getTenseSlice(state, tense));

export const getStatsForVerbTense = (
  state: any,
  verb: string,
  tense: string
): VerbTenseStats => getTenseSlice(state, tense)[verb];

export const getAllVerbsTenseStatsForTense = (
  state: any,
  tense: string
): Array<VerbTenseStats> =>
  getAllVerbsThatHaveStatsForTense(state, tense).map((verb: string) =>
    getStatsForVerbTense(state, tense, verb)
  );
