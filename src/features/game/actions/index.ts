import { getVerbsFilteredByUserOptions } from '../../conjugations/selectors';
import { getAllPeopleInPlay } from '../../menu/features/people/selectors';
import { peopleMap } from '../../../const/models/people';
import { N_GAME_VERBS } from '../const';
import {
  gameShouldEnd,
  isUserAnswerCorrect,
  getCurrentQuestionVerb,
  getCurrentQuestionTense,
  verbIsToBeShownAgain,
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
  ADD_SHOW_AGAIN_VERB: 'game/ADD_SHOW_AGAIN_VERB',
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

export const removeGameVerb = (verb: string) => ({
  type: actionTypes.REMOVE_GAME_VERB,
  payload: {
    verb
  }
});

export const addShowAgainVerbTense = (verb: string, tense: string) => ({
  type: actionTypes.ADD_SHOW_AGAIN_VERB,
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
    if (isUserAnswerCorrect(state)) {
      dispatch(removeGameVerb(verb));
      dispatch(newQuestion());
      dispatch(clearUserAnswer());
    } else {
      const tense = getCurrentQuestionTense(state);
      if (!verbIsToBeShownAgain(state, verb)) {
        dispatch(removeUnseenVerb(verb));
        dispatch(addShowAgainVerbTense(verb, tense));
      }
      dispatch(showConjugations());
    }
  };
};
