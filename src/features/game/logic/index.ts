import { randomElement } from '../../../util';
import { getInPlayTenses } from '../../menu/features/tenses/selectors';
import { VerbTense } from '../models';
import {
  getNextUnseenVerb,
  getNextShowAgainVerbTense,
  needToUseShowAgainVerbTenseForNextQuestion,
  getNoMoreUnseenVerbs,
  getLeastRecentSeenVerb
} from '../selectors';

export const getNextVerbTenseToStudy = (state: any): VerbTense => {
  if (needToUseShowAgainVerbTenseForNextQuestion(state)) {
    return getNextShowAgainVerbTense(state);
  }
  const noMoreUnseenVerbs = getNoMoreUnseenVerbs(state);
  return {
    spanishInfinitive: noMoreUnseenVerbs
      ? getLeastRecentSeenVerb(state)
      : getNextUnseenVerb(state),
    tense: randomElement(getInPlayTenses(state))
  };
};
