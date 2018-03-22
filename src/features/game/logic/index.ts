import { randomElement } from '../../../util';
import { getInPlayTenses } from '../../menu/features/tenses/selectors';
import { VerbTense } from '../models';
import {
  getNextUnseenVerb,
  getNextShowAgainVerbTense,
  needToUseShowAgainVerbTenseForNextQuestion
} from '../selectors';

export const getNextVerbTenseToStudy = (state: any): VerbTense => {
  if (needToUseShowAgainVerbTenseForNextQuestion(state)) {
    return getNextShowAgainVerbTense(state);
  }
  return {
    spanishInfinitive: getNextUnseenVerb(state),
    tense: randomElement(getInPlayTenses(state))
  };
};
