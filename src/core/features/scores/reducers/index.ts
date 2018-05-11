import { ScoresState, initialState } from '../models';
import { actionTypes } from '../actions';

export default (
  scores: ScoresState = initialState,
  action: any
): ScoresState => {
  switch (action.type) {
    case actionTypes.UPDATE_LIFETIME_SCORE:
      return {
        ...scores,
        lifetimeScore: scores.lifetimeScore + action.payload.score
      };
    case actionTypes.UPDATE_HIGHSCORE_SCORE:
      return {
        ...scores,
        previousHighScore: scores.previousHighScore,
        highScore: action.payload.score
      };
    default:
      return scores;
  }
};
