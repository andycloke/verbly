import { PeopleInPlay } from '../models';
import { PeopleMenuDataProps } from '../components/PeopleMenu';

const getPeopleInPlaySlice = (state: any): PeopleInPlay => state.peopleInPlay;

export const getAllPeopleInPlay = (state: any): string[] => {
  const peopleInPlay = getPeopleInPlaySlice(state);
  return Object.keys(peopleInPlay).filter(
    (people: string): boolean => peopleInPlay[people]
  );
};

export const getNumberOfPeopleInPlay = (state: any): number =>
  getAllPeopleInPlay(state).length;

export const enoughPeopleToStartGame = (state: any): boolean =>
  getNumberOfPeopleInPlay(state) > 0;

export const getPeopleMenuProps = (state: any): PeopleMenuDataProps => ({
  inPlay: getPeopleInPlaySlice(state)
});
