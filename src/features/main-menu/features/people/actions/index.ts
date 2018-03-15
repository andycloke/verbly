export const actionTypes = {
  TOGGLE_PERSON_IN_PLAY: 'peopleInPlay/TOGGLE_PERSON_IN_PLAY'
};

export const togglePersonInPlay = (person: string) => ({
  type: actionTypes.TOGGLE_PERSON_IN_PLAY,
  payload: {
    person
  }
});
