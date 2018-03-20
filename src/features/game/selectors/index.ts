import { Game } from '../models';

export const getGameSlice = (state: any): Game => state.game;

export const getGameStarted = (state: any): boolean =>
  getGameSlice(state).started;

export const getGameVerbs = (state: any): Array<string> =>
  getGameSlice(state).verbs;

export const getGameProps = (state: any): any => undefined;
