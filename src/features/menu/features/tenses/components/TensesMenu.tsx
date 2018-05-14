import * as React from 'react';

import Subheader from 'material-ui/Subheader';
import { List, ListItem } from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';

import { DISPLAY_TEXT } from '../../../../../core/constants/tenses';
import { Props } from '../../../../../core/features/menu/features/tenses/containers/TensesMenu';

import './TensesMenu.css';

const TensesMenu = ({ inPlay, toggleTenseInPlay }: Props) => {
  const makeClickHandler = (tense: string) => (
    event: React.MouseEvent<HTMLElement>
  ): any => toggleTenseInPlay(tense);
  return (
    <div className="TensesMenu__outer">
      <List style={{ padding: 0 }}>
        <Subheader>Tenses</Subheader>
        {Object.keys(inPlay).map(key => {
          const checkBox = <Checkbox checked={inPlay[key]} />;
          return (
            <ListItem
              key={key}
              primaryText={DISPLAY_TEXT[key].text}
              secondaryText={DISPLAY_TEXT[key].example}
              leftIcon={checkBox}
              onClick={makeClickHandler(key)}
            />
          );
        })}
      </List>
    </div>
  );
};

export default TensesMenu;
