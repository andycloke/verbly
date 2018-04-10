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

export const calculateAccuracyScore = (accuracyPercentage: number): number =>
  100 + 900 * (accuracyPercentage / 100);
