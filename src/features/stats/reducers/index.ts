import { VerbTenseStats, initialState } from '../models';
import { actionTypes } from '../actions';

export default (stats: any = {}, action: any) => {
  const { verb, tense } = action.payload;
  const initialVerbTenseStats =
    stats.hasOwnProperty(tense) && stats[tense].hasOwnProperty(verb)
      ? stats[tense][verb]
      : undefined;
  return {
    ...stats,
    [tense]: {
      ...stats[tense],
      [verb]: individualVerbTenseStatsReducer(initialVerbTenseStats, action)
    }
  };
};

const individualVerbTenseStatsReducer = (
  stats: VerbTenseStats = initialState,
  action: any
): VerbTenseStats => {
  switch (action.type) {
    case actionTypes.UPDATE_VERB_TENSE_STATS_AFTER_CORRECT:
      return {
        ...stats,
        timesSeen: stats.timesSeen + 1,
        timesCorrect: stats.timesCorrect + 1,
        lastSeen: action.payload.timeStamp
      };
    case actionTypes.UPDATE_VERB_TENSE_STATS_AFTER_INCORRECT:
      return {
        ...stats,
        timesSeen: stats.timesSeen + 1,
        timesIncorrect: stats.timesIncorrect + 1,
        lastSeen: action.payload.timeStamp
      };
    default:
      return stats;
  }
};
