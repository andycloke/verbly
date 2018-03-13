export const actionTypes = {
  SET_REFLEXIVE_VERBS_IN_PLAY: 'verbsInPlay/SET_REFLEXIVE_VERBS_IN_PLAY',
  SET_IRREGULAR_VERBS_IN_PLAY: 'verbsInPlay/SET_IRREGULAR_VERBS_IN_PLAY',
  SET_WHICH_VERBS_IN_PLAY: 'verbsInPlay/SET_WHICH_VERBS_IN_PLAY',
  UPDATE_USER_DEFINED_VERBS: 'verbsInPlay/UPDATE_USER_DEFINED_VERBS'
};

export const setReflexiveVerbsInPlay = (option: string) => ({
  type: actionTypes.SET_REFLEXIVE_VERBS_IN_PLAY,
  payload: {
    option
  }
});

export const setIrregularVerbsInPlay = (option: string) => ({
  type: actionTypes.SET_IRREGULAR_VERBS_IN_PLAY,
  payload: {
    option
  }
});

export const setWhichVerbsInPlay = (option: string) => ({
  type: actionTypes.SET_WHICH_VERBS_IN_PLAY,
  payload: {
    option
  }
});

export const updateUserDefinedVerbs = (verbs: Array<string>) => ({
  type: actionTypes.UPDATE_USER_DEFINED_VERBS,
  payload: {
    verbs
  }
});
