import * as React from 'react';

import Checkbox from 'material-ui/Checkbox';
import Subheader from 'material-ui/Subheader';
import { List, ListItem } from 'material-ui/List';

import { TensesInPlay } from '../models';
import displayText from '../../../../../const/display-text/tenses';

import './TensesMenu.css';

export type TensesMenuDataProps = {
  inPlay: TensesInPlay;
};

type TensesMenuDispatchProps = {
  toggleTenseInPlay: (tense: string) => any;
};

type Props = TensesMenuDataProps & TensesMenuDispatchProps;

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
              primaryText={displayText[key].text}
              secondaryText={displayText[key].example}
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
