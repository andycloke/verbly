import { PeopleInPlay } from '../models';
import { PeopleMenuDataProps } from '../components/PeopleMenu';

const getPeopleInPlaySlice = (state: any): PeopleInPlay => state.peopleInPlay;

export const getAllPeopleInPlay = (state: any): string[] => {
  const peopleInPlay = getPeopleInPlaySlice(state);
  return Object.keys(peopleInPlay).filter(
    (people: string): boolean => peopleInPlay[people]
  );
};

export const getPeopleMenuProps = (state: any): PeopleMenuDataProps => ({
  inPlay: getPeopleInPlaySlice(state)
});
