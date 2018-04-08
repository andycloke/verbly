import { getPeopleDifficultyFactor } from './';

describe('people in play logic', () => {
  describe('getPeopleDifficultyFactor', () => {
    it('maps over people in play and calculates difficulty', () => {
      const state = {
        peopleInPlay: {
          Yo: true,
          Tu: true,
          El: true,
          Nosotros: true,
          Vosotros: false,
          Ellos: true
        }
      };
      expect(getPeopleDifficultyFactor(state)).toEqual(1);
      const state2 = {
        peopleInPlay: {
          Yo: true,
          Tu: false,
          El: false,
          Nosotros: false,
          Vosotros: false,
          Ellos: false
        }
      };
      expect(getPeopleDifficultyFactor(state2)).toEqual(0.2);
    });
  });
});
