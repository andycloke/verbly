import { getVerbsFilteredByUserOptions } from '../../conjugations/selectors';
import { N_GAME_VERBS } from '../const';
import { gameShouldEnd } from '../selectors';
import { getNextVerbTenseToStudy } from '../logic';
import { shuffle } from '../../../util';

export const actionTypes = {
  START_GAME: 'game/START_GAME',
  END_GAME: 'game/END_GAME',
  SET_GAME_UNSEEN_VERBS: 'game/SET_GAME_UNSEEN_VERBS',
  NEW_QUESTION: 'game/NEW_QUESTION'
};

export const startGame = () => ({
  type: actionTypes.START_GAME
});

export const endGame = () => ({
  type: actionTypes.END_GAME
});

export const setGameUnseenVerbs = (verbs: Array<string>) => ({
  type: actionTypes.SET_GAME_UNSEEN_VERBS,
  payload: {
    verbs
  }
});

export const newQuestion = () => {
  return function(dispatch: any, getState: any) {
    const state = getState();
    if (gameShouldEnd(state)) dispatch(endGame());
    const nextVerbTense = getNextVerbTenseToStudy(state);
    // TODO
  };
};

export const initialiseGame = () => {
  return function(dispatch: any, getState: any) {
    const state = getState();
    const suitableVerbs: string[] = getVerbsFilteredByUserOptions(state);
    const shuffledVerbs: string[] = shuffle(suitableVerbs);
    // TODO: use historical stats to decide which to see here
    const gameVerbs = shuffledVerbs.slice(0, N_GAME_VERBS);
    dispatch(setGameUnseenVerbs(gameVerbs));
    dispatch(newQuestion());
  };
};

// TODO: newQuestion
// TODO: update answer
// TODO: submit answer
