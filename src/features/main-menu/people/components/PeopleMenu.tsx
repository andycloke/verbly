import * as React from 'react';

import { PeopleInPlay, people } from '../models';
import Checkbox from 'material-ui/Checkbox';
import Subheader from 'material-ui/Subheader';
import { List, ListItem } from 'material-ui/List';

import './PeopleMenu.css';

export type PeopleMenuDataProps = {
  inPlay: PeopleInPlay;
};

type PeopleMenuDispatchProps = {
  togglePersonInPlay: (person: string) => any;
};

type Props = PeopleMenuDataProps & PeopleMenuDispatchProps;

const displayText = {
  [people.yo]: 'Yo',
  [people.tu]: 'Tú',
  [people.el]: 'Él, Ella, Usted',
  [people.nosotros]: 'Nosotros, Nosotras',
  [people.vosotros]: 'Vosotros, Vosotras',
  [people.ellos]: 'Ellos, Ellas'
};

const PeopleMenu = ({ inPlay, togglePersonInPlay }: Props) => {
  const makeClickHandler = (person: string) => (
    event: React.MouseEvent<HTMLElement>
  ): any => togglePersonInPlay(person);
  return (
    <div className="PeopleMenu__outer">
      <Subheader>People</Subheader>
      <List>
        {Object.keys(inPlay).map(key => {
          const checkBox = <Checkbox checked={inPlay[key]} />;
          return (
            <ListItem
              key={key}
              primaryText={displayText[key]}
              // secondaryText="test"
              leftIcon={checkBox}
              onClick={makeClickHandler(key)}
            />
          );
        })}
      </List>
    </div>
  );
};

export default PeopleMenu;
