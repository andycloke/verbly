import { getVerbsFilteredByUserOptions } from '../../conjugations/selectors';
import { getAllPeopleInPlay } from '../../menu/features/people/selectors';
import { peopleMap } from '../../../const/models/people';
import { N_GAME_VERBS } from '../const';
import {
  gameShouldEnd,
  isUserAnswerCorrect,
  getCurrentQuestionVerb,
  getCurrentQuestionTense
} from '../selectors';
import { getNextVerbTenseToStudy } from '../logic';
import { shuffle, randomElement } from '../../../util';

export const actionTypes = {
  START_GAME: 'game/START_GAME',
  END_GAME: 'game/END_GAME',
  SET_GAME_UNSEEN_VERBS: 'game/SET_GAME_UNSEEN_VERBS',
  REMOVE_UNSEEN_VERB: 'game/REMOVE_UNSEEN_VERB',
  ADD_SHOW_AGAIN_VERB: 'game/ADD_SHOW_AGAIN_VERB',
  NEW_QUESTION: 'game/NEW_QUESTION',
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
    if (gameShouldEnd(state)) dispatch(endGame());
    else {
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
      dispatch(removeUnseenVerb(verb));
      dispatch(newQuestion());
      dispatch(clearUserAnswer());
    } else {
      const tense = getCurrentQuestionTense(state);
      dispatch(addShowAgainVerbTense(verb, tense));
      // TODO: show conjugations
    }
  };
};
