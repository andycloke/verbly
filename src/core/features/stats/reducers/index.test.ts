import statsReducer from './';
import {
  updateVerbTenseStatsAfterCorrect,
  updateVerbTenseStatsAfterIncorrect
} from '../actions';

describe('statsReducer', () => {
  describe('updateVerbTenseStatsAfterCorrect', () => {
    it('handles verb tense combos that have no previous stats', () => {
      const verb = 'acabar';
      const tense = 'IndicativePresent';
      const timeStamp = '29/04/17';
      expect(
        statsReducer(
          undefined,
          updateVerbTenseStatsAfterCorrect(verb, tense, timeStamp)
        )
      ).toEqual({
        [tense]: {
          [verb]: {
            timesSeen: 1,
            timesCorrect: 1,
            timesIncorrect: 0,
            lastSeen: timeStamp
          }
        }
      });
    });
    it('handles verb tense combos that have some previous stats', () => {
      const verb = 'acabar';
      const tense = 'IndicativePresent';
      const timeStamp = '29/04/17';
      const timeStamp2 = '29/05/17';
      const initialState = {
        [tense]: {
          [verb]: {
            timesSeen: 1,
            timesCorrect: 1,
            timesIncorrect: 0,
            lastSeen: timeStamp
          }
        }
      };
      expect(
        statsReducer(
          initialState,
          updateVerbTenseStatsAfterCorrect(verb, tense, timeStamp2)
        )
      ).toEqual({
        [tense]: {
          [verb]: {
            timesSeen: 2,
            timesCorrect: 2,
            timesIncorrect: 0,
            lastSeen: timeStamp2
          }
        }
      });
    });
    it('only updates the relevant verb', () => {
      const verb = 'acabar';
      const verb2 = 'hacer';
      const tense = 'IndicativePresent';
      const timeStamp = '29/04/17';
      const timeStamp2 = '29/04/17';
      const initialState = {
        [tense]: {
          [verb]: {
            timesSeen: 1,
            timesCorrect: 1,
            timesIncorrect: 0,
            lastSeen: timeStamp
          },
          [verb2]: {
            timesSeen: 2,
            timesCorrect: 1,
            timesIncorrect: 1,
            lastSeen: timeStamp
          }
        }
      };
      expect(
        statsReducer(
          initialState,
          updateVerbTenseStatsAfterCorrect(verb, tense, timeStamp2)
        )
      ).toEqual({
        [tense]: {
          [verb]: {
            timesSeen: 2,
            timesCorrect: 2,
            timesIncorrect: 0,
            lastSeen: timeStamp2
          },
          [verb2]: {
            timesSeen: 2,
            timesCorrect: 1,
            timesIncorrect: 1,
            lastSeen: timeStamp
          }
        }
      });
    });
    it('only updates the relevant tense', () => {
      const verb = 'acabar';
      const tense = 'IndicativePresent';
      const tense2 = 'IndicativePresentProgressive';
      const timeStamp = '29/04/17';
      const timeStamp2 = '29/04/17';
      const initialState = {
        [tense]: {
          [verb]: {
            timesSeen: 1,
            timesCorrect: 1,
            timesIncorrect: 0,
            lastSeen: timeStamp
          }
        }
      };
      expect(
        statsReducer(
          initialState,
          updateVerbTenseStatsAfterCorrect(verb, tense2, timeStamp2)
        )
      ).toEqual({
        [tense]: {
          [verb]: {
            timesSeen: 1,
            timesCorrect: 1,
            timesIncorrect: 0,
            lastSeen: timeStamp2
          }
        },
        [tense2]: {
          [verb]: {
            timesSeen: 1,
            timesCorrect: 1,
            timesIncorrect: 0,
            lastSeen: timeStamp2
          }
        }
      });
    });
  });
  describe('updateVerbTenseStatsAfterIncorrect', () => {
    it('handles verb tense combos that have no previous stats', () => {
      const verb = 'acabar';
      const tense = 'IndicativePresent';
      const timeStamp = '29/04/17';
      expect(
        statsReducer(
          undefined,
          updateVerbTenseStatsAfterIncorrect(verb, tense, timeStamp)
        )
      ).toEqual({
        [tense]: {
          [verb]: {
            timesSeen: 1,
            timesCorrect: 0,
            timesIncorrect: 1,
            lastSeen: timeStamp
          }
        }
      });
    });
    it('handles verb tense combos that have some previous stats', () => {
      const verb = 'acabar';
      const tense = 'IndicativePresent';
      const timeStamp = '29/04/17';
      const timeStamp2 = '29/05/17';
      const initialState = {
        [tense]: {
          [verb]: {
            timesSeen: 1,
            timesCorrect: 1,
            timesIncorrect: 0,
            lastSeen: timeStamp
          }
        }
      };
      expect(
        statsReducer(
          initialState,
          updateVerbTenseStatsAfterIncorrect(verb, tense, timeStamp2)
        )
      ).toEqual({
        [tense]: {
          [verb]: {
            timesSeen: 2,
            timesCorrect: 1,
            timesIncorrect: 1,
            lastSeen: timeStamp2
          }
        }
      });
    });
    it('only updates the relevant verb', () => {
      const verb = 'acabar';
      const verb2 = 'hacer';
      const tense = 'IndicativePresent';
      const timeStamp = '29/04/17';
      const timeStamp2 = '29/04/17';
      const initialState = {
        [tense]: {
          [verb]: {
            timesSeen: 1,
            timesCorrect: 1,
            timesIncorrect: 0,
            lastSeen: timeStamp
          },
          [verb2]: {
            timesSeen: 2,
            timesCorrect: 1,
            timesIncorrect: 1,
            lastSeen: timeStamp
          }
        }
      };
      expect(
        statsReducer(
          initialState,
          updateVerbTenseStatsAfterIncorrect(verb, tense, timeStamp2)
        )
      ).toEqual({
        [tense]: {
          [verb]: {
            timesSeen: 2,
            timesCorrect: 1,
            timesIncorrect: 1,
            lastSeen: timeStamp2
          },
          [verb2]: {
            timesSeen: 2,
            timesCorrect: 1,
            timesIncorrect: 1,
            lastSeen: timeStamp
          }
        }
      });
    });
    it('only updates the relevant tense', () => {
      const verb = 'acabar';
      const tense = 'IndicativePresent';
      const tense2 = 'IndicativePresentProgressive';
      const timeStamp = '29/04/17';
      const timeStamp2 = '29/04/17';
      const initialState = {
        [tense]: {
          [verb]: {
            timesSeen: 1,
            timesCorrect: 1,
            timesIncorrect: 0,
            lastSeen: timeStamp
          }
        }
      };
      expect(
        statsReducer(
          initialState,
          updateVerbTenseStatsAfterIncorrect(verb, tense2, timeStamp2)
        )
      ).toEqual({
        [tense]: {
          [verb]: {
            timesSeen: 1,
            timesCorrect: 1,
            timesIncorrect: 0,
            lastSeen: timeStamp
          }
        },
        [tense2]: {
          [verb]: {
            timesSeen: 1,
            timesCorrect: 0,
            timesIncorrect: 1,
            lastSeen: timeStamp2
          }
        }
      });
    });
  });
});
