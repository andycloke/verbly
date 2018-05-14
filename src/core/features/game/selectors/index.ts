import * as moment from 'moment';

import { getHighScore } from '../../scores/selectors';
import { People } from '../../../constants/people';

import { Game, VerbTense, CurrentQuestion } from '../models';
import { CORRECT_ANSWERS_TARGET } from '../constants';
import {
  getDisplayEnglishInfinitive,
  getAudioFeedback
} from '../../../../features/options/selectors';
import {
  getEnglishInfinitive,
  getConjugationInTenseForPerson
} from '../../../../features/conjugations/selectors';
import { getDifficultyMultiplier } from '../../../features/menu/selectors';
import {
  calculateAccuracyScore,
  calculateTimeTakenMultiplier,
  calculateGameScore
} from '../logic';

import { StateProps } from '../containers/Game';
import {
  ConjugationDisplayPair,
  StateProps as ConjugationsTableStateProps
} from '../containers/ConjugationsTable';
import { StateProps as ProgressBarStateProps } from '../containers/ProgressBar';
import { StateProps as ReviewStateProps } from '../containers/Review';
import { StateProps as GameContainerStateProps } from '../containers/GameContainer';

export const getGameSlice = (state: any): Game => state.game;

export const getGameStarted = (state: any): boolean =>
  getGameSlice(state).started;

export const getGameUnseenVerbTenses = (state: any): Array<VerbTense> =>
  getGameSlice(state).unseenVerbTenses;

export const getMostRecentlySeenVerbTenses = (state: any): Array<VerbTense> =>
  getGameSlice(state).mostRecentlySeenVerbTenses;

export const getNumberOfSeenVerbTenses = (state: any): number =>
  getMostRecentlySeenVerbTenses(state).length;

export const getLeastRecentlySeenVerbTense = (state: any): VerbTense =>
  getMostRecentlySeenVerbTenses(state)[getNumberOfSeenVerbTenses(state) - 1];

export const getNumberOfUnseenVerbTenses = (state: any): number =>
  getGameUnseenVerbTenses(state).length;

export const getNoMoreUnseenVerbTenses = (state: any): boolean =>
  getNumberOfUnseenVerbTenses(state) === 0;

export const getNextUnseenVerbTense = (state: any): VerbTense =>
  getGameUnseenVerbTenses(state)[0];

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
        verbTense.verb === verb && verbTense.tense === tense
    )
  );
};

export const getNextShowAgainVerbTense = (state: any): VerbTense =>
  getGameShowAgainVerbTenses(state)[0];

export const getNumberOfQuestionsAnswered = (state: any): number =>
  getGameSlice(state).questionsAnswered;

export const getNumberOfQuestionsCorrect = (state: any): number =>
  getGameSlice(state).questionsCorrect;

export const getPercentageCorrect = (state: any): number =>
  Math.round(
    getNumberOfQuestionsCorrect(state) /
      getNumberOfQuestionsAnswered(state) *
      100
  );

export const getAccuracyScore = (state: any): number =>
  calculateAccuracyScore(getPercentageCorrect(state));

// Limited number of questions can be answered correctly, so at a certain point we need to show
// any verb-tense combos that need reviewing
export const needToUseShowAgainVerbTenseForNextQuestion = (
  state: any
): boolean =>
  CORRECT_ANSWERS_TARGET - getNumberOfQuestionsCorrect(state) <=
  getNumberOfGameShowAgainVerbTenses(state);

export const gameShouldEnd = (state: any): boolean =>
  getNumberOfQuestionsCorrect(state) >= CORRECT_ANSWERS_TARGET;

export const getCurrentQuestion = (state: any): CurrentQuestion =>
  getGameSlice(state).currentQuestion;

export const getCurrentQuestionTense = (state: any): string =>
  getCurrentQuestion(state).tense;

export const getCurrentQuestionPerson = (state: any): string =>
  getCurrentQuestion(state).person;

export const getCurrentQuestionDisplayPerson = (state: any): string =>
  getCurrentQuestion(state).displayPerson;

export const getCurrentQuestionVerb = (state: any): string =>
  getCurrentQuestion(state).verb;

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

export const getFirstCorrectAnswer = (state: any): string =>
  getCorrectAnswers(state)[0];

export const isUserAnswerCorrect = (state: any): boolean =>
  getCorrectAnswers(state).includes(getUserAnswer(state).toLowerCase());

export const getConjugationsBeingDisplayed = (state: any): boolean =>
  getGameSlice(state).displayConjugations;

export const getReviewOpen = (state: any): boolean =>
  getGameSlice(state).reviewOpen;

export const getStartTime = (state: any): string =>
  getGameSlice(state).startTime;

export const getEndTime = (state: any): string => getGameSlice(state).endTime;

export const getTimeTaken = (state: any): number =>
  moment(getEndTime(state)).diff(moment(getStartTime(state)));

export const getTimeTakenMultiplier = (state: any): number =>
  calculateTimeTakenMultiplier(getTimeTaken(state));

export const getGameScore = (state: any): number =>
  calculateGameScore(
    getAccuracyScore(state),
    getTimeTakenMultiplier(state),
    getDifficultyMultiplier(state)
  );

export const getNewHighScore = (state: any): boolean =>
  getGameScore(state) === getHighScore(state);

export const getGameProps = (state: any): StateProps => {
  const verb = getCurrentQuestionVerb(state);
  if (verb) {
    return {
      tense: getCurrentQuestionTense(state),
      person: getCurrentQuestionDisplayPerson(state),
      verb: verb,
      englishInfinitive: getDisplayEnglishInfinitive(state)
        ? getEnglishInfinitive(state, verb)
        : '',
      userAnswer: getUserAnswer(state),
      displayConjugations: getConjugationsBeingDisplayed(state),
      userAnswerCorrect: isUserAnswerCorrect(state),
      correctAnswer: getFirstCorrectAnswer(state),
      audioFeedback: getAudioFeedback(state)
    };
  }
  return {
    tense: '',
    person: '',
    verb: '',
    englishInfinitive: '',
    userAnswer: '',
    displayConjugations: false,
    userAnswerCorrect: false,
    correctAnswer: '',
    audioFeedback: getAudioFeedback(state)
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

export const getProgressBarProps = (state: any): ProgressBarStateProps => ({
  questionsCorrect: getNumberOfQuestionsCorrect(state),
  questionsCorrectTarget: CORRECT_ANSWERS_TARGET
});

export const getReviewProps = (state: any): ReviewStateProps => {
  return {
    questionsAnswered: getNumberOfQuestionsAnswered(state),
    questionsCorrect: getNumberOfQuestionsCorrect(state),
    timeTaken: getTimeTaken(state),
    difficultyMultiplier: getDifficultyMultiplier(state),
    gameScore: getGameScore(state),
    highScore: getHighScore(state),
    newHighScore: getNewHighScore(state)
  };
};

export const getGameContainerProps = (state: any): GameContainerStateProps => ({
  reviewOpen: getReviewOpen(state)
});
