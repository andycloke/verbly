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

// TODO: fetchVerbsForGame (inplayOptions): List<Conjugation>
// Conjugations bit of state

// TODO: newQuestion
// TODO: update answer
// TODO: submit answer
