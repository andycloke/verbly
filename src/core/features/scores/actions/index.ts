import { highScoreNeedsUpdating } from '../selectors';

export const actionTypes = {
  UPDATE_LIFETIME_SCORE: 'scores/UPDATE_LIFETIME_SCORE',
  UPDATE_HIGHSCORE_SCORE: 'scores/UPDATE_HIGHSCORE_SCORE'
};

export const updateLifetimeScore = (score: number) => ({
  type: actionTypes.UPDATE_LIFETIME_SCORE,
  payload: {
    score
  }
});

export const updateHighScore = (score: number) => ({
  type: actionTypes.UPDATE_HIGHSCORE_SCORE,
  payload: {
    score
  }
});

export const updateNecessaryScoresAfterGame = (score: number) => {
  return function(dispatch: any, getState: any) {
    dispatch(updateLifetimeScore(score));
    const state = getState();
    if (highScoreNeedsUpdating(state, score)) {
      dispatch(updateHighScore(score));
    }
  };
};
