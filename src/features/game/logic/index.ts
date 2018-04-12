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

export const calculateTimeTakenScore = (timeTakenMs: number): number =>
  Math.max((50 - timeTakenMs / 1000) * 1000, 500);

// TODO: improve calculateTimeTakenScore

export const calculateGameScore = (
  accuracyScore: number,
  timeTakenScore: number,
  difficultyFactor: number
): number => accuracyScore * timeTakenScore * difficultyFactor;
