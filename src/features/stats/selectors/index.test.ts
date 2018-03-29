import {
  getAllVerbsThatHaveStatsForTense,
  getAllVerbsTenseStatsForTense
} from './';

describe('conjugations selectors', () => {
  const verb1 = 'acabar';
  const verb2 = 'hacer';
  const verb3 = 'estar';
  const verb4 = 'pagar';
  const verb5 = 'meter';
  const tense1 = 'IndicativePresent';
  const tense2 = 'IndicativePresentProgressive';
  const tense3 = 'IndicativeFuture';
  describe('getAllVerbsThatHaveStatsForTense', () => {
    it('gets all the infinitives that have stats for a particular tense', () => {
      const state = {
        stats: {
          [tense1]: {}
        }
      };
    });
  });
});
