import { actionTypes } from '../actions';
import { initialState, Game } from '../models';

export default (game: Game = initialState, action: any) => {
  switch (action.type) {
    case actionTypes.START_GAME:
      return {
        ...game,
        started: true
      };
    case actionTypes.END_GAME:
      return {
        ...game,
        started: false
      };
    case actionTypes.SET_GAME_UNSEEN_VERBS:
      return {
        ...game,
        unseenVerbs: action.payload.verbs
      };
    case actionTypes.REMOVE_UNSEEN_VERB:
      return {
        ...game,
        unseenVerbs: game.unseenVerbs.filter(
          (verb: string): boolean => verb !== action.payload.verb
        )
      };
    case actionTypes.NEW_QUESTION:
      return {
        ...game,
        currentQuestion: action.payload
      };
    case actionTypes.UPDATE_USER_ANSWER:
      return {
        ...game,
        userAnswer: action.payload.userAnswer
      };
    case actionTypes.CLEAR_USER_ANSWER:
      return {
        ...game,
        userAnswer: ''
      };
    default:
      return game;
  }
};
