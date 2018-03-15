export const actionTypes = {
  TOGGLE_TENSE_IN_PLAY: 'tensesInPlay/TOGGLE_TENSE_IN_PLAY'
};

export const toggleTenseInPlay = (tense: string) => ({
  type: actionTypes.TOGGLE_TENSE_IN_PLAY,
  payload: {
    tense
  }
});
