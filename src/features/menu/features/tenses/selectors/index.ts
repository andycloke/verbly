import { TensesInPlay } from '../models';
import { TensesMenuDataProps } from '../components/TensesMenu';
import DIFFICULTIES from '../const/difficulties';
import { Tenses } from '../../../../../const/models/tenses';

const getTensesInPlaySlice = (state: any): TensesInPlay => state.tensesInPlay;

export const getInPlayTenses = (state: any): string[] => {
  const tensesInPlay = getTensesInPlaySlice(state);
  return Object.keys(tensesInPlay).filter(
    (tense: string): boolean => tensesInPlay[tense]
  );
};

export const getNumberOfTensesInPlay = (state: any): number =>
  getInPlayTenses(state).length;

export const enoughTensesToStartGame = (state: any): boolean =>
  getNumberOfTensesInPlay(state) > 0;

export const getTensesMenuProps = (state: any): TensesMenuDataProps => ({
  inPlay: getTensesInPlaySlice(state)
});

export const getTensesDifficultyFactor = (state: any): number =>
  getInPlayTenses(state).reduce(
    (count: number, tense: Tenses) => (count += DIFFICULTIES[tense]),
    0
  );
