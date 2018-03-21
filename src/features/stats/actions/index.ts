export const actionTypes = {
  UPDATE_VERB_TENSE_AFTER_CORRECT: 'stats/UPDATE_VERB_TENSE_AFTER_CORRECT',
  UPDATE_VERB_TENSE_AFTER_INCORRECT: 'stats/UPDATE_VERB_TENSE_AFTER_INCORRECT'
};

export const updateVerbTenseAfterCorrect = (
  verb: string,
  tense: string,
  timeStamp: string
) => ({
  type: actionTypes.UPDATE_VERB_TENSE_AFTER_CORRECT,
  payload: {
    verb,
    tense,
    timeStamp
  }
});

export const updateVerbTenseAfterInCorrect = (
  verb: string,
  tense: string,
  timeStamp: string
) => ({
  type: actionTypes.UPDATE_VERB_TENSE_AFTER_INCORRECT,
  payload: {
    verb,
    tense,
    timeStamp
  }
});
