import { Game, VerbTense, CurrentQuestion } from '../models';
import { MAX_QUESTIONS_ANSWERED } from '../const';
import { StateProps } from '../containers/Game';
import { getDisplayEnglishInfinitive } from '../../options/selectors';
import {
  getEnglishInfinitive,
  getConjugationInTenseForPerson
} from '../../conjugations/selectors';

export const getGameSlice = (state: any): Game => state.game;

export const getGameStarted = (state: any): boolean =>
  getGameSlice(state).started;

export const getGameUnseenVerbs = (state: any): Array<string> =>
  getGameSlice(state).unseenVerbs;

export const getNextUnseenVerb = (state: any): string =>
  getGameUnseenVerbs(state)[0];

export const getGameShowAgainVerbTenses = (state: any): Array<VerbTense> =>
  getGameSlice(state).showAgainVerbTenses;

export const getGameShowAgainVerbs = (state: any): Array<string> =>
  getGameShowAgainVerbTenses(state).map(
    (verbTense: VerbTense) => verbTense.spanishInfinitive
  );

export const verbIsToBeShownAgain = (
  state: any,
  spanishInfinitive: string
): boolean => {
  const showAgainVerbs = getGameShowAgainVerbs(state);
  return !!showAgainVerbs.length && showAgainVerbs.includes(spanishInfinitive);
};

export const getNextShowAgainVerbTense = (state: any): VerbTense =>
  getGameShowAgainVerbTenses(state)[0];

export const getQuestionsAnswered = (state: any): number =>
  getGameSlice(state).questionsAnswered;

export const gameShouldEnd = (state: any): boolean =>
  getQuestionsAnswered(state) >= MAX_QUESTIONS_ANSWERED ||
  (getGameUnseenVerbs(state).length === 0 &&
    getGameShowAgainVerbTenses(state).length === 0);

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

export const getCorrectAnswers = (state: any): string[] => {
  const tense = getCurrentQuestionTense(state);
  const person = getCurrentQuestionPerson(state);
  const verb = getCurrentQuestionVerb(state);
  return getConjugationInTenseForPerson(state, verb, tense, person);
};

export const isUserAnswerCorrect = (state: any): boolean =>
  getCorrectAnswers(state).includes(getUserAnswer(state));

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
