import { actionTypes } from '../actions';

const statAlreadyExists = (
  stats: any,
  tense: string,
  verb: string,
  statName: string
): boolean =>
  stats[tense] && stats[tense][verb] && stats[tense][verb][statName];

// TODO: bit nested at the momemnt, could be simplified
export default (stats: any = {}, action: any) => {
  switch (action.type) {
    case actionTypes.UPDATE_VERB_TENSE_AFTER_CORRECT:
      const { verb, tense, timeStamp } = action.payload;
      return {
        ...stats,
        [tense]: {
          ...stats[tense],
          [verb]: {
            timesSeen: statAlreadyExists(stats, tense, verb, 'timesSeen')
              ? stats[tense][verb].timesSeen + 1
              : 1,
            timesCorrect: statAlreadyExists(stats, tense, verb, 'timesCorrect')
              ? stats[tense][verb].timesCorrect + 1
              : 1,
            lastSeen: timeStamp
          }
        }
      };
    case actionTypes.UPDATE_VERB_TENSE_AFTER_INCORRECT:
      return {
        ...stats,
        [tense]: {
          ...stats[tense],
          [verb]: {
            timesSeen: statAlreadyExists(stats, tense, verb, 'timesSeen')
              ? stats[tense][verb].timesSeen + 1
              : 1,
            timesIncorrect: statAlreadyExists(
              stats,
              tense,
              verb,
              'timesIncorrect'
            )
              ? stats[tense][verb].timesIncorrect + 1
              : 1,
            lastSeen: timeStamp
          }
        }
      };
    default:
      return stats;
  }
};
