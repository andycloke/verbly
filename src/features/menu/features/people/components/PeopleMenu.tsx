import * as React from 'react';

import { PEOPLE_MAP } from '../../../../../core/constants/people';
import { Props } from '../../../../../core/features/menu/features/people/containers/PeopleMenu';

import Checkbox from 'material-ui/Checkbox';
import Subheader from 'material-ui/Subheader';
import { List, ListItem } from 'material-ui/List';

import './PeopleMenu.css';

const PeopleMenu = ({ inPlay, togglePersonInPlay }: Props) => {
  const makeClickHandler = (person: string) => (
    event: React.MouseEvent<HTMLElement>
  ): any => togglePersonInPlay(person);
  return (
    <div className="PeopleMenu__outer">
      <Subheader>People</Subheader>
      <List style={{ padding: 0 }}>
        {Object.keys(inPlay).map(key => {
          const checkBox = <Checkbox checked={inPlay[key]} />;
          return (
            <ListItem
              key={key}
              primaryText={PEOPLE_MAP[key].join(', ')}
              leftIcon={checkBox}
              onClick={makeClickHandler(key)}
              style={{ padding: '3px 0' }}
            />
          );
        })}
      </List>
    </div>
  );
};

export default PeopleMenu;
