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

export const calculateTimeTakenScore = (timeTakenMs: number): number => {
  const timeS = timeTakenMs / 1000;
  return Math.max(10000 - (timeS - 50) * 10, 500);
};

export const calculateGameScore = (
  accuracyScore: number,
  timeTakenScore: number,
  difficultyFactor: number
): number => accuracyScore * timeTakenScore * difficultyFactor;
