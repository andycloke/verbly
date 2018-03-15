import { PeopleInPlay } from '../models';
import { PeopleMenuDataProps } from '../components/PeopleMenu';

const getPeopleInPlaySlice = (state: any): PeopleInPlay => state.peopleInPlay;

const getPersonInPlay = (state: any, person: string): boolean =>
  getPeopleInPlaySlice(state)[person];

// bit redundant at the moment - repeats  `getPeopleSlice` but might want
// to change one of them in the future
export const getPeopleMenuProps = (state: any): PeopleMenuDataProps => ({
  inPlay: {
    yo: getPersonInPlay(state, 'yo'),
    tu: getPersonInPlay(state, 'tu'),
    el: getPersonInPlay(state, 'el'),
    nosotros: getPersonInPlay(state, 'nosotros'),
    vosotros: getPersonInPlay(state, 'vosotros'),
    ellos: getPersonInPlay(state, 'ellos')
  }
});
