import { getVerbsFilteredByUserOptions } from '../../conjugations/selectors';
import {
  updateVerbTenseStatsAfterCorrect,
  updateVerbTenseStatsAfterIncorrect
} from '../../stats/actions';
import { getAllPeopleInPlay } from '../../menu/features/people/selectors';
import { peopleMap } from '../../../const/models/people';
import { N_GAME_VERBS } from '../const';
import {
  gameShouldEnd,
  isUserAnswerCorrect,
  getCurrentQuestionVerb,
  getCurrentQuestionTense,
  verbTenseIsToBeShownAgain,
  getConjugationsBeingDisplayed,
  userAnswerNotBlank
} from '../selectors';
import { getNextVerbTenseToStudy } from '../logic';
import { shuffle, randomElement } from '../../../util';

export const actionTypes = {
  START_GAME: 'game/START_GAME',
  END_GAME: 'game/END_GAME',
  NEW_QUESTION: 'game/NEW_QUESTION',
  SET_GAME_UNSEEN_VERBS: 'game/SET_GAME_UNSEEN_VERBS',
  REMOVE_GAME_VERB: 'game/REMOVE_GAME_VERB',
  REMOVE_UNSEEN_VERB: 'game/REMOVE_UNSEEN_VERB',
  ADD_MOST_RECENTLY_SEEN_VERB: 'game/ADD_MOST_RECENTLY_SEEN_VERB',
  ADD_SHOW_AGAIN_VERB_TENSE: 'game/ADD_SHOW_AGAIN_VERB_TENSE',
  REMOVE_SHOW_AGAIN_VERB: 'game/REMOVE_SHOW_AGAIN_VERB',
  SHOW_CONJUGATIONS: 'game/SHOW_CONJUGATIONS',
  HIDE_CONJUGATIONS: 'game/HIDE_CONJUGATIONS',
  UPDATE_USER_ANSWER: 'game/UPDATE_USER_ANSWER',
  CLEAR_USER_ANSWER: 'game/CLEAR_USER_ANSWER',
  SUBMIT_ANSWER: 'game/SUBMIT_ANSWER'
};

export const startGame = () => ({
  type: actionTypes.START_GAME
});

export const endGame = () => ({
  type: actionTypes.END_GAME
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

export const setGameUnseenVerbs = (verbs: Array<string>) => ({
  type: actionTypes.SET_GAME_UNSEEN_VERBS,
  payload: {
    verbs
  }
});

export const removeUnseenVerb = (verb: string) => ({
  type: actionTypes.REMOVE_UNSEEN_VERB,
  payload: {
    verb
  }
});

export const addMostRecentlySeenVerb = (verb: string) => ({
  type: actionTypes.ADD_MOST_RECENTLY_SEEN_VERB,
  payload: {
    verb
  }
});

export const removeGameVerb = (verb: string) => ({
  type: actionTypes.REMOVE_GAME_VERB,
  payload: {
    verb
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
  type: actionTypes.REMOVE_SHOW_AGAIN_VERB,
  payload: {
    verb,
    tense
  }
});

export const newQuestion = () => {
  return function(dispatch: any, getState: any) {
    const state = getState();
    if (gameShouldEnd(state)) {
      dispatch(endGame());
    } else {
      if (getConjugationsBeingDisplayed(state)) {
        dispatch(hideConjugations());
      }
      if (userAnswerNotBlank(state)) {
        dispatch(clearUserAnswer());
      }
      const verbTense = getNextVerbTenseToStudy(state);
      const { spanishInfinitive, tense } = verbTense;
      const person = randomElement(getAllPeopleInPlay(state));
      const displayPerson = randomElement(peopleMap[person]);
      dispatch({
        type: actionTypes.NEW_QUESTION,
        payload: {
          person,
          spanishInfinitive,
          tense,
          displayPerson
        }
      });
    }
  };
};

export const initialiseGame = () => {
  return function(dispatch: any, getState: any) {
    dispatch(startGame());
    dispatch(clearUserAnswer());
    const state = getState();
    const suitableVerbs: string[] = getVerbsFilteredByUserOptions(state);
    const shuffledVerbs: string[] = shuffle(suitableVerbs);
    // TODO: use historical stats to decide which to see here
    const gameVerbs = shuffledVerbs.slice(0, N_GAME_VERBS);
    dispatch(setGameUnseenVerbs(gameVerbs));
    dispatch(newQuestion());
  };
};

export const submitAnswer = () => {
  return function(dispatch: any, getState: any) {
    const state = getState();
    const verb = getCurrentQuestionVerb(state);
    const tense = getCurrentQuestionTense(state);
    dispatch(addMostRecentlySeenVerb(verb));
    if (verbTenseIsToBeShownAgain(state, verb, tense)) {
      dispatch(removeShowAgainVerbTense(verb, tense));
    }
    if (isUserAnswerCorrect(state)) {
      dispatch(removeGameVerb(verb));
      dispatch(newQuestion());
      dispatch(clearUserAnswer());
      dispatch(updateVerbTenseStatsAfterCorrect(verb, tense, '21233'));
    } else {
      if (!verbTenseIsToBeShownAgain(state, verb, tense)) {
        // verb tense was unseen
        dispatch(removeUnseenVerb(verb));
      }
      // move to back of show again queue
      dispatch(addShowAgainVerbTense(verb, tense));
      dispatch(showConjugations());
      dispatch(updateVerbTenseStatsAfterIncorrect(verb, tense, '89777'));
    }
  };
};
