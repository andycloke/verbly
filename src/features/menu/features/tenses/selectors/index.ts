import { TensesInPlay } from '../models';
import { TensesMenuDataProps } from '../components/TensesMenu';

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
