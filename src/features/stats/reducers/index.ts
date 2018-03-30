import { VerbTenseStats, initialState } from '../models';
import { actionTypes } from '../actions';

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

export default (stats: any = {}, action: any) => {
  if (Object.values(actionTypes).includes(action.type)) {
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
  }
  return stats;
};
