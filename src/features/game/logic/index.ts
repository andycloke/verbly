import { VerbTense } from '../models';
import {
  getNextUnseenVerbTense,
  getNextShowAgainVerbTense,
  needToUseShowAgainVerbTenseForNextQuestion,
  getNoMoreUnseenVerbTenses,
  getLeastRecentlySeenVerbTense
} from '../selectors';

export const getNextVerbTenseToStudy = (state: any): VerbTense => {
  if (needToUseShowAgainVerbTenseForNextQuestion(state)) {
    return getNextShowAgainVerbTense(state);
  }
  if (getNoMoreUnseenVerbTenses(state)) {
    return getLeastRecentlySeenVerbTense(state);
  }
  return getNextUnseenVerbTense(state);
};

export const calculateAccuracyScore = (percentageCorrect: number): number =>
  1000 + 9000 * (percentageCorrect / 100);

export const TARGET_TIME_S = 15;
// beyond LOWEST_TIME_S times give user the minimum multiplier i.e. dont give them 0 or a negative one
export const LOWEST_TIME_S = 90;
export const TARGET_TIME_TAKEN_MULTIPLIER = 5;
export const MIN_TIME_TAKEN_MULTIPLIER = 1;

export const calculateTimeTakenMultiplier = (timeTakenMs: number): number => {
  const timeS = timeTakenMs / 1000;
  const gradient =
    (TARGET_TIME_TAKEN_MULTIPLIER - MIN_TIME_TAKEN_MULTIPLIER) /
    (TARGET_TIME_S - LOWEST_TIME_S);
  return (
    Math.round(
      Math.max(
        TARGET_TIME_TAKEN_MULTIPLIER + gradient * (timeS - TARGET_TIME_S),
        MIN_TIME_TAKEN_MULTIPLIER
      ) * 100
    ) / 100
  );
};

export const calculateGameScore = (
  accuracyScore: number,
  timeTakenMultiplier: number,
  difficultyMultiplier: number
): number => accuracyScore * timeTakenMultiplier * difficultyMultiplier;
