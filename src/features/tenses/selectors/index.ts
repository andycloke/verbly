import { TensesInPlay } from '../models';
import { TensesMenuDataProps } from '../components/TensesMenu';

const getTensesInPlaySlice = (state: any): TensesInPlay => state.tensesInPlay;

export const getTensesMenuProps = (state: any): TensesMenuDataProps => ({
  inPlay: getTensesInPlaySlice(state)
});
