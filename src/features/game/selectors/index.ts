import { People } from '../../../const/models/people';
import { Game, VerbTense, CurrentQuestion } from '../models';
import { MAX_QUESTIONS_ANSWERED } from '../const';
import { StateProps } from '../containers/Game';
import { ConjugationDisplayPair } from '../containers/ConjugationsTable';
import { StateProps as ConjugationsTableStateProps } from '../containers/ConjugationsTable';
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

export const getMostRecentlySeenVerbs = (state: any): Array<string> =>
  getGameSlice(state).mostRecentlySeenVerbs;

export const getNumberOfSeenVerbs = (state: any): number =>
  getMostRecentlySeenVerbs(state).length;

export const getLeastRecentSeenVerb = (state: any): string =>
  getMostRecentlySeenVerbs(state)[getNumberOfSeenVerbs(state) - 1];

export const getNumberOfUnseenVerbs = (state: any): number =>
  getGameUnseenVerbs(state).length;

export const getNoMoreUnseenVerbs = (state: any): boolean =>
  getGameUnseenVerbs(state).length === 0;

export const getNextUnseenVerb = (state: any): string =>
  getGameUnseenVerbs(state)[0];

export const getGameShowAgainVerbTenses = (state: any): Array<VerbTense> =>
  getGameSlice(state).showAgainVerbTenses;

export const getNumberOfGameShowAgainVerbTenses = (state: any): number =>
  getGameShowAgainVerbTenses(state).length;

export const noMoreShowAgainVerbTenses = (state: any): boolean =>
  getNumberOfGameShowAgainVerbTenses(state) === 0;

export const verbTenseIsToBeShownAgain = (
  state: any,
  verb: string,
  tense: string
): boolean => {
  const showAgainVerbTenses = getGameShowAgainVerbTenses(state);
  return (
    !!showAgainVerbTenses.length &&
    showAgainVerbTenses.some(
      (verbTense: VerbTense) =>
        verbTense.spanishInfinitive === verb && verbTense.tense === tense
    )
  );
};

export const getNextShowAgainVerbTense = (state: any): VerbTense =>
  getGameShowAgainVerbTenses(state)[0];

export const getNumberOfQuestionsAnswered = (state: any): number =>
  getGameSlice(state).questionsAnswered;

// Limited number of questions can be asked, so at a certain point we need to show
// any verb-tense combos that need reviewing
export const needToStartShowingShowAgainVerbTenses = (state: any): boolean =>
  MAX_QUESTIONS_ANSWERED - getNumberOfQuestionsAnswered(state) <=
  getNumberOfGameShowAgainVerbTenses(state);

export const needToUseShowAgainVerbTenseForNextQuestion = (
  state: any
): boolean =>
  getNoMoreUnseenVerbs(state) || needToStartShowingShowAgainVerbTenses(state);

export const gameShouldEnd = (state: any): boolean =>
  getNumberOfQuestionsAnswered(state) >= MAX_QUESTIONS_ANSWERED ||
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

export const userAnswerNotBlank = (state: any): boolean =>
  getUserAnswer(state) !== '';

export const getCorrectAnswers = (state: any): string[] => {
  const tense = getCurrentQuestionTense(state);
  const person = getCurrentQuestionPerson(state);
  const verb = getCurrentQuestionVerb(state);
  return getConjugationInTenseForPerson(state, verb, tense, person);
};

export const isUserAnswerCorrect = (state: any): boolean =>
  getCorrectAnswers(state).includes(getUserAnswer(state).toLowerCase());

export const getConjugationsBeingDisplayed = (state: any): boolean =>
  getGameSlice(state).displayConjugations;

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
      userAnswer: getUserAnswer(state),
      displayConjugations: getConjugationsBeingDisplayed(state),
      userAnswerCorrect: isUserAnswerCorrect(state)
    };
  }
  return {
    tense: '',
    person: '',
    verb: '',
    englishInfinitive: '',
    userAnswer: '',
    displayConjugations: false,
    userAnswerCorrect: false
  };
};

export const getConjugationsTableProps = (
  state: any
): ConjugationsTableStateProps => {
  const questionVerb = getCurrentQuestionVerb(state);
  const questionTense = getCurrentQuestionTense(state);
  const questionPerson = getCurrentQuestionPerson(state);
  const displayPerson = getCurrentQuestionDisplayPerson(state);
  const people = Object.keys(People);
  const conjugations: ConjugationDisplayPair[] = [];
  people.forEach((person: string) => {
    const highlight = person === questionPerson;
    conjugations.push({
      person: highlight ? displayPerson : person,
      conjugation: getConjugationInTenseForPerson(
        state,
        questionVerb,
        questionTense,
        person
      )[0],
      highlight
    });
  });
  return {
    conjugations
  };
};
