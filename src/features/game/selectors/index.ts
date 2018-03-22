import { Game, VerbTense, CurrentQuestion } from '../models';
import { MAX_QUESTIONS_ANSWERED } from '../const';
import { StateProps } from '../containers/Game';
import { getDisplayEnglishInfinitive } from '../../options/selectors';
import { getEnglishInfinitive } from '../../conjugations/selectors';

export const getGameSlice = (state: any): Game => state.game;

export const getGameStarted = (state: any): boolean =>
  getGameSlice(state).started;

export const getGameUnseenVerbs = (state: any): Array<string> =>
  getGameSlice(state).unseenVerbs;

export const getNextUnseenVerb = (state: any): string =>
  getGameUnseenVerbs(state)[0];

export const getGameShowAgainVerbs = (state: any): Array<VerbTense> =>
  getGameSlice(state).showAgainVerbs;

export const getNextShowAgainVerbTense = (state: any): VerbTense =>
  getGameShowAgainVerbs(state)[0];

export const getQuestionsAnswered = (state: any): number =>
  getGameSlice(state).questionsAnswered;

export const gameShouldEnd = (state: any): boolean =>
  getQuestionsAnswered(state) >= MAX_QUESTIONS_ANSWERED ||
  (getGameUnseenVerbs(state).length === 0 &&
    getGameShowAgainVerbs(state).length === 0);

export const getCurrentQuestion = (state: any): CurrentQuestion =>
  getGameSlice(state).currentQuestion;

export const getCurrentQuestionTense = (state: any): string =>
  getCurrentQuestion(state).tense;

export const getCurrentQuestionPerson = (state: any): string =>
  getCurrentQuestion(state).person;

export const getCurrentQuestionDisplayPerson = (state: any): string =>
  getCurrentQuestion(state).displayPerson;

export const getCurrentQuestionVerb = (state: any): string =>
  getCurrentQuestion(state).spanishInfinitive;

export const getUserAnswer = (state: any): string =>
  getGameSlice(state).userAnswer;

export const getGameProps = (state: any): StateProps => {
  const spanishInfinitive = getCurrentQuestionVerb(state);
  if (spanishInfinitive) {
    return {
      tense: getCurrentQuestionTense(state),
      person: getCurrentQuestionDisplayPerson(state),
      verb: spanishInfinitive,
      englishInfinitive: getDisplayEnglishInfinitive(state)
        ? getEnglishInfinitive(state, spanishInfinitive)
        : '',
      userAnswer: getUserAnswer(state)
    };
  }
  return {
    tense: '',
    person: '',
    verb: '',
    englishInfinitive: '',
    userAnswer: ''
  };
};
