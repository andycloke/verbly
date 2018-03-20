export const actionTypes = {
  START_GAME: 'game/START_GAME',
  END_GAME: 'game/END_GAME',
  SET_GAME_VERBS: 'game/SET_GAME_VERBS'
};

export const startGame = () => ({
  type: actionTypes.START_GAME
});

export const endGame = () => ({
  type: actionTypes.END_GAME
});

export const setGameVerbs = (verbs: Array<string>) => ({
  type: actionTypes.SET_GAME_VERBS,
  payload: {
    verbs
  }
});

// TODO: stats bit of state

// TODO: newQuestion
// TODO: update answer
// TODO: submit answer
