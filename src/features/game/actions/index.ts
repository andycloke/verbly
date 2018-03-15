export const actionTypes = {
  START_GAME: 'game/START_GAME',
  END_GAME: 'game/END_GAME'
};

export const startGame = () => ({
  type: actionTypes.START_GAME
});

export const endGame = () => ({
  type: actionTypes.END_GAME
});
