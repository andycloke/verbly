import { VerbTenseStats } from '../models';

export const getStatsSlice = (state: any): any => state.stats;

export const getTenseSlice = (state: any, tense: string): any =>
  getStatsSlice(state).hasOwnProperty(tense) ? getStatsSlice(state)[tense] : {};

export const getAllVerbsThatHaveStatsForTense = (
  state: any,
  tense: string
): string[] => Object.keys(getTenseSlice(state, tense));

export const getNumberOfVerbsWithStatsForTense = (
  state: any,
  tense: string
): number => getAllVerbsThatHaveStatsForTense(state, tense).length;

export const getStatsForVerbTense = (
  state: any,
  tense: string,
  verb: string
): VerbTenseStats => getTenseSlice(state, tense)[verb];

export const getNumberOfTimesIncorrect = (
  state: any,
  tense: string,
  verb: string
): number => getStatsForVerbTense(state, tense, verb).timesIncorrect;

export const getNumberOfTimesSeen = (
  state: any,
  tense: string,
  verb: string
): number => getStatsForVerbTense(state, tense, verb).timesSeen;

export const getPercentageIncorrect = (
  state: any,
  tense: string,
  verb: string
): number =>
  getNumberOfTimesIncorrect(state, tense, verb) /
  getNumberOfTimesSeen(state, tense, verb);

export const getAllVerbsTenseStatsForTense = (
  state: any,
  tense: string
): Array<VerbTenseStats> =>
  getAllVerbsThatHaveStatsForTense(state, tense).map((verb: string) => ({
    verb,
    ...getStatsForVerbTense(state, tense, verb)
  }));

type VerbIncorrectPer = {
  verb: string;
  percentageIncorrect: number;
};

export const getVerbsForTenseSortedByPercentageIncorrect = (
  state: any,
  tense: string,
  percentageIncorrectLowerBound: number = 0
): Array<string> =>
  getAllVerbsThatHaveStatsForTense(state, tense)
    .map((verb: string): VerbIncorrectPer => ({
      verb,
      percentageIncorrect: getPercentageIncorrect(state, tense, verb)
    }))
    .filter(
      (o: VerbIncorrectPer): boolean =>
        o.percentageIncorrect >= percentageIncorrectLowerBound
    )
    .sort((a: VerbIncorrectPer, b: VerbIncorrectPer) => {
      if (a.percentageIncorrect >= b.percentageIncorrect) return -1;
      return 1;
    })
    .map((o: VerbIncorrectPer): string => o.verb);
