import { actionTypes } from '../actions';
import { initialState, VerbsInPlay } from '../models';
import endingsReducer from './endings';

const reducer = (verbsInPlay: VerbsInPlay = initialState, action: any) => {
  switch (action.type) {
    case actionTypes.SET_REFLEXIVE_VERBS_IN_PLAY:
      return {
        ...verbsInPlay,
        reflexive: action.payload.option
      };
    case actionTypes.SET_IRREGULAR_VERBS_IN_PLAY:
      return {
        ...verbsInPlay,
        irregular: action.payload.option
      };
    case actionTypes.SET_WHICH_VERBS_IN_PLAY:
      return {
        ...verbsInPlay,
        whichVerbs: action.payload.option
      };
    case actionTypes.UPDATE_USER_DEFINED_VERBS:
      return {
        ...verbsInPlay,
        userDefinedVerbs: action.payload.verbs
      };
    case actionTypes.TOGGLE_VERB_ENDING_IN_PLAY:
      return {
        ...verbsInPlay,
        endings: endingsReducer(verbsInPlay.endings, action)
      };
    default:
      return verbsInPlay;
  }
};

export default reducer;
