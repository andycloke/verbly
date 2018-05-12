import {
  calculateTimeTakenMultiplier,
  TARGET_TIME_TAKEN_MULTIPLIER,
  MIN_TIME_TAKEN_MULTIPLIER,
  LOWEST_TIME_S,
  TARGET_TIME_S
} from './';

describe('calculateTimeTakenMultiplier', () => {
  it(`Gives a score of ${TARGET_TIME_TAKEN_MULTIPLIER} for times of ${TARGET_TIME_S}s`, () => {
    expect(calculateTimeTakenMultiplier(TARGET_TIME_S * 1000)).toBe(
      TARGET_TIME_TAKEN_MULTIPLIER
    );
  });
  it(`Gives a score of more than ${TARGET_TIME_TAKEN_MULTIPLIER} for times of less than ${TARGET_TIME_S}s`, () => {
    expect(
      calculateTimeTakenMultiplier(TARGET_TIME_S * 1000 - 20000)
    ).toBeGreaterThan(TARGET_TIME_TAKEN_MULTIPLIER);
  });
  it(`Gives a score of ${MIN_TIME_TAKEN_MULTIPLIER} for times of ${LOWEST_TIME_S}s and slower`, () => {
    expect(calculateTimeTakenMultiplier(LOWEST_TIME_S * 1000)).toBe(1);
    expect(calculateTimeTakenMultiplier(LOWEST_TIME_S * 1000 + 20000)).toBe(1);
  });
});
