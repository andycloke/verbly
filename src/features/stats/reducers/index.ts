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
    case actionTypes.UPDATE_VERB_TENSE_STATS_AFTER_CORRECT:
      return {
        ...stats,
        [action.payload.tense]: {
          ...stats[action.payload.tense],
          [action.payload.verb]: {
            timesSeen: statAlreadyExists(
              stats,
              action.payload.tense,
              action.payload.verb,
              'timesSeen'
            )
              ? stats[action.payload.tense][action.payload.verb].timesSeen + 1
              : 1,
            timesCorrect: statAlreadyExists(
              stats,
              action.payload.tense,
              action.payload.verb,
              'timesCorrect'
            )
              ? stats[action.payload.tense][action.payload.verb].timesCorrect +
                1
              : 1,
            lastSeen: action.payload.timeStamp
          }
        }
      };
    case actionTypes.UPDATE_VERB_TENSE_STATS_AFTER_INCORRECT:
      return {
        ...stats,
        [action.payload.tense]: {
          ...stats[action.payload.tense],
          [action.payload.verb]: {
            timesSeen: statAlreadyExists(
              stats,
              action.payload.tense,
              action.payload.verb,
              'timesSeen'
            )
              ? stats[action.payload.tense][action.payload.verb].timesSeen + 1
              : 1,
            timesIncorrect: statAlreadyExists(
              stats,
              action.payload.tense,
              action.payload.verb,
              'timesIncorrect'
            )
              ? stats[action.payload.tense][action.payload.verb]
                  .timesIncorrect + 1
              : 1,
            lastSeen: action.payload.timeStamp
          }
        }
      };
    default:
      return stats;
  }
};
