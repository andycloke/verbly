import { ScoresState } from '../models';

export const getScoreSlice = (state: any): ScoresState => state.scores;

export const getLifetimeScore = (state: any): number =>
  getScoreSlice(state).lifetimeScore;

export const getHighScore = (state: any): number =>
  getScoreSlice(state).highScore;

export const highScoreNeedsUpdating = (state: any, score: number): boolean =>
  score > getHighScore(state);

export const getPreviousHighScore = (state: any): number =>
  getScoreSlice(state).previousHighScore;
