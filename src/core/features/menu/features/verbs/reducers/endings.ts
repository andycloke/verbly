import { actionTypes } from '../actions';
import { initialState, EndingsInPlay } from '../models/endings';

export default (endingsInPlay: EndingsInPlay = initialState, action: any) => {
  switch (action.type) {
    case actionTypes.TOGGLE_VERB_ENDING_IN_PLAY:
      return {
        ...endingsInPlay,
        [action.payload.ending]: !endingsInPlay[action.payload.ending]
      };
    default:
      return endingsInPlay;
  }
};
