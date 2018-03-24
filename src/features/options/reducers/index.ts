import { actionTypes } from '../actions';
import { initialOptions, Options } from '../models';

const reducer = (options: Options = initialOptions, action: any) => {
  switch (action.type) {
    case actionTypes.TOGGLE_ENGLISH_INFINITIVE:
      return {
        ...options,
        displayEnglishInfinitive: !options.displayEnglishInfinitive
      };
    case actionTypes.TOGGLE_AUDIO_FEEDBACK:
      return {
        ...options,
        audioFeedback: !options.audioFeedback
      };
    case actionTypes.TOGGLE_OPTIONS_MENU_OPEN:
      return {
        ...options,
        optionsModalOpen: !options.optionsModalOpen
      };
    default:
      return options;
  }
};

export default reducer;
