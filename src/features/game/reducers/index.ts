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
    default:
      return game;
  }
};
