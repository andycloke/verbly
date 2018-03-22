import { randomElement } from '../../../util';
import { getInPlayTenses } from '../../menu/features/tenses/selectors';
import { VerbTense } from '../models';
import {
  getGameShowAgainVerbTenses,
  getNextUnseenVerb,
  getNextShowAgainVerbTense
} from '../selectors';

export const getNextVerbTenseToStudy = (state: any): VerbTense => {
  if (!getGameShowAgainVerbTenses(state).length) {
    return {
      spanishInfinitive: getNextUnseenVerb(state),
      tense: randomElement(getInPlayTenses(state))
    };
  }
  return getNextShowAgainVerbTense(state);
};
