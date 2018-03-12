import { actionTypes } from '../actions';
import { initialState, PeopleInPlay } from '../models';

const reducer = (peopleInPlay: PeopleInPlay = initialState, action: any) => {
  switch (action.type) {
    case actionTypes.TOGGLE_PERSON_IN_PLAY:
      const { person } = action.payload;
      return {
        ...peopleInPlay,
        [person]: !peopleInPlay[person]
      };
    default:
      return peopleInPlay;
  }
};

export default reducer;
