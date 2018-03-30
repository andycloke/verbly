import {
  getAllVerbsThatHaveStatsForTense,
  getAllVerbsTenseStatsForTense,
  getVerbsForTenseSortedByPercentageIncorrect
} from './';

describe('conjugations selectors', () => {
  const verb1 = 'acabar';
  const verb2 = 'hacer';
  const verb3 = 'estar';
  const verb4 = 'pagar';
  const tense1 = 'IndicativePresent';
  const tense2 = 'IndicativePresentProgressive';
  const tense3 = 'IndicativeFuture';
  const timeStamp = '29/04/17';
  const timeStamp2 = '29/05/17';
  describe('getAllVerbsThatHaveStatsForTense', () => {
    it('gets all the infinitives that have stats for a particular tense', () => {
      const state = {
        stats: {
          [tense1]: {
            [verb1]: {
              timesSeen: 1,
              timesCorrect: 1,
              timesIncorrect: 0,
              lastSeen: timeStamp
            },
            [verb2]: {
              timesSeen: 1,
              timesCorrect: 1,
              timesIncorrect: 0,
              lastSeen: timeStamp
            }
          },
          [tense2]: {
            [verb3]: {
              timesSeen: 1,
              timesCorrect: 1,
              timesIncorrect: 0,
              lastSeen: timeStamp
            }
          }
        }
      };
      expect(getAllVerbsThatHaveStatsForTense(state, tense1)).toEqual([
        verb1,
        verb2
      ]);
    });
    it('returns an empty array if there are no the infinitives with stats for a particular tense', () => {
      const state = {
        stats: {
          [tense1]: {
            [verb1]: {
              timesSeen: 1,
              timesCorrect: 1,
              timesIncorrect: 0,
              lastSeen: timeStamp
            },
            [verb2]: {
              timesSeen: 1,
              timesCorrect: 1,
              timesIncorrect: 0,
              lastSeen: timeStamp
            }
          },
          [tense2]: {
            [verb3]: {
              timesSeen: 1,
              timesCorrect: 1,
              timesIncorrect: 0,
              lastSeen: timeStamp
            }
          }
        }
      };
      expect(getAllVerbsThatHaveStatsForTense(state, tense3)).toEqual([]);
    });
  });
  describe('getAllVerbsTenseStatsForTense', () => {
    it('gets stats for all verbs that have stats for a particular tense', () => {
      const stats1 = {
        timesSeen: 1,
        timesCorrect: 1,
        timesIncorrect: 0,
        lastSeen: timeStamp
      };
      const stats2 = {
        timesSeen: 1,
        timesCorrect: 1,
        timesIncorrect: 0,
        lastSeen: timeStamp2
      };
      const state = {
        stats: {
          [tense1]: {
            [verb1]: stats1,
            [verb2]: stats2
          },
          [tense2]: {
            [verb3]: {
              timesSeen: 1,
              timesCorrect: 1,
              timesIncorrect: 0,
              lastSeen: timeStamp
            }
          }
        }
      };
      expect(getAllVerbsTenseStatsForTense(state, tense1)).toEqual([
        { verb: verb1, ...stats1 },
        { verb: verb2, ...stats2 }
      ]);
    });
  });
  describe('getVerbsForTenseSortedByPercentageIncorrect', () => {
    it('gets all verbs that have been studied for a tense and sorts by highest % incorrect', () => {
      const state = {
        stats: {
          [tense1]: {
            [verb1]: {
              timesSeen: 10,
              timesCorrect: 10,
              timesIncorrect: 0,
              lastSeen: timeStamp
            },
            [verb2]: {
              timesSeen: 10,
              timesCorrect: 8,
              timesIncorrect: 2,
              lastSeen: timeStamp
            },
            [verb3]: {
              timesSeen: 10,
              timesCorrect: 4,
              timesIncorrect: 6,
              lastSeen: timeStamp
            },
            [verb4]: {
              timesSeen: 10,
              timesCorrect: 6,
              timesIncorrect: 4,
              lastSeen: timeStamp
            }
          }
        }
      };
      expect(
        getVerbsForTenseSortedByPercentageIncorrect(state, tense1)
      ).toEqual([verb3, verb4, verb2, verb1]);
    });
  });
});
