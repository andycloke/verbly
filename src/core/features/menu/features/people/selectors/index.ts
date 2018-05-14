import { personIsYo } from '../../../../../util';
import { People } from '../../../../../constants/people';
import { getOnlyImperativeTensesInPlay } from '../../tenses/selectors';
import { PeopleMenuStateProps } from '../containers/PeopleMenu';
import DIFFICULTIES from '../constants/difficulties';
import { PeopleInPlay } from '../models';

const getPeopleInPlaySlice = (state: any): PeopleInPlay => state.peopleInPlay;

export const getAllPeopleInPlay = (state: any): string[] => {
  const peopleInPlay = getPeopleInPlaySlice(state);
  return Object.keys(peopleInPlay).filter(
    (people: string): boolean => peopleInPlay[people]
  );
};

export const getNumberOfPeopleInPlay = (state: any): number =>
  getAllPeopleInPlay(state).length;

export const getOnlyYoInPlay = (state: any): boolean =>
  getAllPeopleInPlay(state).every((person: string) => person === People.Yo);

export const moreThanOnePersonInPlay = (state: any): boolean =>
  getNumberOfPeopleInPlay(state) > 0;

export const getPeopleMenuProps = (state: any): PeopleMenuStateProps => ({
  inPlay: getPeopleInPlaySlice(state)
});

export const getPeopleDifficultyFactor = (state: any): number =>
  getAllPeopleInPlay(state).reduce(
    (count: number, person: People) =>
      (count +=
        getOnlyImperativeTensesInPlay(state) && personIsYo(person)
          ? 0
          : DIFFICULTIES[person]),
    0
  );
