import { actionTypes } from '../actions';
import { initialOptions, Options } from '../models';

const reducer = (options: Options = initialOptions, action: any) => {
  switch (action.type) {
    case actionTypes.TOGGLE_ENGLISH_INFINITIVE:
      return {
        ...options,
        displayEnglishInfinitive: !options.displayEnglishInfinitive
      };
    default:
      return options;
  }
};

export default reducer;
