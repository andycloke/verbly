export type ScoresState = {
  highScore: number;
  previousHighScore: number;
  lifetimeScore: number;
};

export const initialState = {
  highScore: 0,
  previousHighScore: 0,
  lifetimeScore: 0
};
