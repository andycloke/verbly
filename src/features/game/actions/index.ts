import * as moment from 'moment';
import { getVerbsFilteredByUserOptions } from '../../conjugations/selectors';
import {
  updateVerbTenseStatsAfterCorrect,
  updateVerbTenseStatsAfterIncorrect
} from '../../stats/actions';
import { updateNecessaryScoresAfterGame } from '../../scores/actions';
import { getAllPeopleInPlay } from '../../menu/features/people/selectors';
import { getInPlayTenses } from '../../menu/features/tenses/selectors';
import { getVerbsForTenseSortedByPercentageIncorrect } from '../../stats/selectors';
import { peopleMap } from '../../../const/models/people';
import { N_GAME_VERB_TENSES, MAX_FRACTION_OF_OLD_VERBS } from '../const';
import {
  gameShouldEnd,
  isUserAnswerCorrect,
  getCurrentQuestionVerb,
  getCurrentQuestionTense,
  verbTenseIsToBeShownAgain,
  getConjugationsBeingDisplayed,
  userAnswerNotBlank,
  getGameScore
} from '../selectors';
import { getNextVerbTenseToStudy } from '../logic';
import { VerbTense } from '../models';
import { shuffle, randomElement } from '../../../util';

export const actionTypes = {
  START_GAME: 'game/START_GAME',
  RESET_GAME: 'game/RESET_GAME',
  OPEN_REVIEW: 'game/OPEN_REVIEW',
  NEW_QUESTION: 'game/NEW_QUESTION',
  SET_GAME_UNSEEN_VERB_TENSES: 'game/SET_GAME_UNSEEN_VERB_TENSES',
  REMOVE_GAME_VERB_TENSE: 'game/REMOVE_GAME_VERB_TENSE',
  REMOVE_UNSEEN_VERB_TENSE: 'game/REMOVE_UNSEEN_VERB_TENSE',
  ADD_MOST_RECENTLY_SEEN_VERB_TENSE: 'game/ADD_MOST_RECENTLY_SEEN_VERB_TENSE',
  ADD_SHOW_AGAIN_VERB_TENSE: 'game/ADD_SHOW_AGAIN_VERB_TENSE',
  REMOVE_SHOW_AGAIN_VERB_TENSE: 'game/REMOVE_SHOW_AGAIN_VERB_TENSE',
  SHOW_CONJUGATIONS: 'game/SHOW_CONJUGATIONS',
  HIDE_CONJUGATIONS: 'game/HIDE_CONJUGATIONS',
  UPDATE_USER_ANSWER: 'game/UPDATE_USER_ANSWER',
  CLEAR_USER_ANSWER: 'game/CLEAR_USER_ANSWER',
  SUBMIT_ANSWER: 'game/SUBMIT_ANSWER',
  ADD_QUESTION_CORRECT: 'game/ADD_QUESTION_CORRECT',
  INCREMENT_QUESTIONS_ANSWERED: 'game/INCREMENT_QUESTIONS_ANSWERED'
};

export const startGame = (startTime: string) => ({
  type: actionTypes.START_GAME,
  payload: {
    startTime
  }
});

export const resetGame = () => ({
  type: actionTypes.RESET_GAME
});

export const openReview = (endTime: string) => ({
  type: actionTypes.OPEN_REVIEW,
  payload: {
    endTime
  }
});

export const updateUserAnswer = (userAnswer: string) => ({
  type: actionTypes.UPDATE_USER_ANSWER,
  payload: {
    userAnswer
  }
});

export const clearUserAnswer = () => ({
  type: actionTypes.CLEAR_USER_ANSWER
});

export const showConjugations = () => ({
  type: actionTypes.SHOW_CONJUGATIONS
});

export const hideConjugations = () => ({
  type: actionTypes.HIDE_CONJUGATIONS
});

export const setGameUnseenVerbTenses = (verbTenses: Array<VerbTense>) => ({
  type: actionTypes.SET_GAME_UNSEEN_VERB_TENSES,
  payload: {
    verbTenses
  }
});

export const removeUnseenVerbTense = (verb: string, tense: string) => ({
  type: actionTypes.REMOVE_UNSEEN_VERB_TENSE,
  payload: {
    verb,
    tense
  }
});

export const addMostRecentlySeenVerbTense = (verb: string, tense: string) => ({
  type: actionTypes.ADD_MOST_RECENTLY_SEEN_VERB_TENSE,
  payload: {
    verb,
    tense
  }
});

export const removeGameVerbTense = (verb: string, tense: string) => ({
  type: actionTypes.REMOVE_GAME_VERB_TENSE,
  payload: {
    verb,
    tense
  }
});

export const addShowAgainVerbTense = (verb: string, tense: string) => ({
  type: actionTypes.ADD_SHOW_AGAIN_VERB_TENSE,
  payload: {
    verb,
    tense
  }
});

export const removeShowAgainVerbTense = (verb: string, tense: string) => ({
  type: actionTypes.REMOVE_SHOW_AGAIN_VERB_TENSE,
  payload: {
    verb,
    tense
  }
});

export const addQuestionCorrect = () => ({
  type: actionTypes.ADD_QUESTION_CORRECT
});

export const incrementQuestionsAnswered = () => ({
  type: actionTypes.INCREMENT_QUESTIONS_ANSWERED
});

export const newQuestion = () => {
  return function(dispatch: any, getState: any) {
    const state = getState();
    if (gameShouldEnd(state)) {
      dispatch(openReview(moment().format()));
      const state2 = getState();
      dispatch(updateNecessaryScoresAfterGame(getGameScore(state2)));
    } else {
      if (getConjugationsBeingDisplayed(state)) {
        dispatch(hideConjugations());
      }
      if (userAnswerNotBlank(state)) {
        dispatch(clearUserAnswer());
      }
      const verbTense = getNextVerbTenseToStudy(state);
      const { verb, tense } = verbTense;
      const person = randomElement(getAllPeopleInPlay(state));
      const displayPerson = randomElement(peopleMap[person]);
      dispatch({
        type: actionTypes.NEW_QUESTION,
        payload: {
          person,
          verb,
          tense,
          displayPerson
        }
      });
    }
  };
};

export const initialiseGame = () => {
  return function(dispatch: any, getState: any) {
    dispatch(startGame(moment().format()));
    dispatch(clearUserAnswer());
    const state = getState();
    const tenses = getInPlayTenses(state);
    const userFilteredVerbs: string[] = getVerbsFilteredByUserOptions(state);
    const nGameVerbTenses = Math.min(
      N_GAME_VERB_TENSES,
      userFilteredVerbs.length
    );
    const verbTenses: Array<VerbTense> = [];
    const nTenses = tenses.length;
    const maxOldVerbsPerTense = Math.round(
      N_GAME_VERB_TENSES * MAX_FRACTION_OF_OLD_VERBS / nTenses
    );
    for (let i = 0; i < nTenses; i++) {
      const tense = tenses[i];
      getVerbsForTenseSortedByPercentageIncorrect(state, tense, 0.1)
        .filter((verb: string): boolean => userFilteredVerbs.includes(verb))
        .slice(0, maxOldVerbsPerTense)
        .forEach((verb: string) => {
          verbTenses.push({
            verb,
            tense
          });
        });
    }
    while (verbTenses.length < nGameVerbTenses) {
      for (let i = 0; i < nTenses; i++) {
        verbTenses.push({
          verb: randomElement(userFilteredVerbs),
          tense: tenses[i]
        });
      }
    }
    dispatch(setGameUnseenVerbTenses(shuffle(verbTenses)));
    dispatch(newQuestion());
  };
};

export const submitAnswer = () => {
  return function(dispatch: any, getState: any) {
    dispatch(incrementQuestionsAnswered());
    const state = getState();
    const verb = getCurrentQuestionVerb(state);
    const tense = getCurrentQuestionTense(state);
    dispatch(addMostRecentlySeenVerbTense(verb, tense));
    if (verbTenseIsToBeShownAgain(state, verb, tense)) {
      dispatch(removeShowAgainVerbTense(verb, tense));
    }
    if (isUserAnswerCorrect(state)) {
      dispatch(addQuestionCorrect());
      dispatch(removeGameVerbTense(verb, tense));
      dispatch(newQuestion());
      dispatch(clearUserAnswer());
      dispatch(
        updateVerbTenseStatsAfterCorrect(verb, tense, moment().format())
      );
    } else {
      if (!verbTenseIsToBeShownAgain(state, verb, tense)) {
        // verb tense was unseen
        dispatch(removeUnseenVerbTense(verb, tense));
      }
      // move to back of show again queue
      dispatch(addShowAgainVerbTense(verb, tense));
      dispatch(showConjugations());
      dispatch(
        updateVerbTenseStatsAfterIncorrect(verb, tense, moment().format())
      );
    }
  };
};
