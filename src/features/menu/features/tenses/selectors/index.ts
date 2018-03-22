import { TensesInPlay } from '../models';
import { TensesMenuDataProps } from '../components/TensesMenu';

const getTensesInPlaySlice = (state: any): TensesInPlay => state.tensesInPlay;

export const getInPlayTenses = (state: any): string[] => {
  const tensesInPlay = getTensesInPlaySlice(state);
  return Object.keys(tensesInPlay).filter(
    (tense: string): boolean => tensesInPlay[tense]
  );
};

export const getTensesMenuProps = (state: any): TensesMenuDataProps => ({
  inPlay: getTensesInPlaySlice(state)
});
