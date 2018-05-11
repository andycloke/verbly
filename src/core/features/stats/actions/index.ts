export const actionTypes = {
  UPDATE_VERB_TENSE_STATS_AFTER_CORRECT:
    'stats/UPDATE_VERB_TENSE_STATS_AFTER_CORRECT',
  UPDATE_VERB_TENSE_STATS_AFTER_INCORRECT:
    'stats/UPDATE_VERB_TENSE_STATS_AFTER_INCORRECT'
};

export const updateVerbTenseStatsAfterCorrect = (
  verb: string,
  tense: string,
  timeStamp: string
) => ({
  type: actionTypes.UPDATE_VERB_TENSE_STATS_AFTER_CORRECT,
  payload: {
    verb,
    tense,
    timeStamp
  }
});

export const updateVerbTenseStatsAfterIncorrect = (
  verb: string,
  tense: string,
  timeStamp: string
) => ({
  type: actionTypes.UPDATE_VERB_TENSE_STATS_AFTER_INCORRECT,
  payload: {
    verb,
    tense,
    timeStamp
  }
});
