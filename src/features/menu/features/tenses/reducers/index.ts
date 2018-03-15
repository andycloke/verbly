import { actionTypes } from '../actions';
import { initialState, TensesInPlay } from '../models';

const reducer = (tensesInPlay: TensesInPlay = initialState, action: any) => {
  switch (action.type) {
    case actionTypes.TOGGLE_TENSE_IN_PLAY:
      const { tense } = action.payload;
      return {
        ...tensesInPlay,
        [tense]: !tensesInPlay[tense]
      };
    default:
      return tensesInPlay;
  }
};

export default reducer;
