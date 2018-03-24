import * as React from 'react';

import PeopleMenu from '../features/people/containers/PeopleMenu';
import TensesMenu from '../features/tenses/containers/TensesMenu';
import VerbsMenu from '../features/verbs/containers/VerbsMenu';
import ConjugationsFetchWrapper from '../../conjugations/containers/ConjugationsFetchWrapper';

import './MainMenu.css';

class MainMenu extends React.PureComponent {
  render() {
    return (
      <div className="MainMenu__outer">
        <PeopleMenu />
        <div className="MainMenu_rightContainer">
          <TensesMenu />
          <VerbsMenu />
        </div>
      </div>
    );
  }
}

export default ConjugationsFetchWrapper(MainMenu, true);
