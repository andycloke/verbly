import { Tenses } from '../../../../../constants/tenses';
import { TensesInPlay } from '../models';
import { TensesMenuStateProps } from '../containers/TensesMenu';
import DIFFICULTIES from '../constants/difficulties';

const getTensesInPlaySlice = (state: any): TensesInPlay => state.tensesInPlay;

export const getInPlayTenses = (state: any): string[] => {
  const tensesInPlay = getTensesInPlaySlice(state);
  return Object.keys(tensesInPlay).filter(
    (tense: string): boolean => tensesInPlay[tense]
  );
};

export const getNumberOfTensesInPlay = (state: any): number =>
  getInPlayTenses(state).length;

export const getOnlyImperativeTensesInPlay = (state: any): boolean =>
  getInPlayTenses(state).every(
    (tense: string) =>
      tense === Tenses.ImperativeAffirmativePresent ||
      tense === Tenses.ImperativeNegativePresent
  );

export const getSomeImperativeTensesInPlay = (state: any): boolean =>
  getInPlayTenses(state).some(
    (tense: string) =>
      tense === Tenses.ImperativeAffirmativePresent ||
      tense === Tenses.ImperativeNegativePresent
  );

export const moreThanOneTenseInPlay = (state: any): boolean =>
  getNumberOfTensesInPlay(state) > 0;

export const getTensesMenuProps = (state: any): TensesMenuStateProps => ({
  inPlay: getTensesInPlaySlice(state)
});

export const getTensesDifficultyFactor = (state: any): number => {
  const inPlayTenses = getInPlayTenses(state);
  if (!inPlayTenses.length) return 0;
  const sum = inPlayTenses.reduce(
    (count: number, tense: Tenses) => (count += DIFFICULTIES[tense]),
    0
  );
  return sum / inPlayTenses.length;
};
