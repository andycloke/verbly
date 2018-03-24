import * as React from 'react';
import { Tabs, Tab } from 'material-ui/Tabs';

import PeopleMenu from '../features/people/containers/PeopleMenu';
import TensesMenu from '../features/tenses/containers/TensesMenu';
import VerbsMenu from '../features/verbs/containers/VerbsMenu';
import ConjugationsFetchWrapper from '../../conjugations/containers/ConjugationsFetchWrapper';
import StartGameButton from '../containers/StartGameButton';

import './MainMenu.css';

class MainMenu extends React.PureComponent {
  render() {
    return (
      <div>
        <div className="MainMenu__startButton">
          <StartGameButton />
        </div>
        <div className="MainMenu__outer">
          <PeopleMenu />
          <div className="MainMenu_rightContainer">
            <TensesMenu />
            <VerbsMenu />
          </div>
        </div>
        <div className="MainMenu__outer--tabs">
          <Tabs initialSelectedIndex={1}>
            <Tab label="People">
              <PeopleMenu />
            </Tab>
            <Tab label="Tenses">
              <TensesMenu />
            </Tab>
            <Tab label="Verbs">
              <VerbsMenu />
            </Tab>
          </Tabs>
        </div>
      </div>
    );
  }
}

export default ConjugationsFetchWrapper(MainMenu, true);
