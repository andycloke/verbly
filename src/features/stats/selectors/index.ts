import { VerbTenseStats } from '../models';

export const getStatsSlice = (state: any): any => state.stats;

export const getTenseSlice = (state: any, tense: string): any =>
  getStatsSlice(state).hasOwnProperty(tense) ? getStatsSlice(state)[tense] : {};

export const getAllVerbsWithStatsForTense = (
  state: any,
  tense: string
): string[] => Object.keys(getTenseSlice(state, tense));

export const getVerbTensesStats = (
  state: any,
  verb: string,
  tense: string
): VerbTenseStats => getTenseSlice(state, tense)[verb];
