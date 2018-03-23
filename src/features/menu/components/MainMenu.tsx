import * as React from 'react';

import PeopleMenu from '../features/people/containers/PeopleMenu';
import TensesMenu from '../features/tenses/containers/TensesMenu';
import VerbsMenu from '../features/verbs/containers/VerbsMenu';
import ConjugationsFetchWrapper from '../../conjugations/containers/ConjugationsFetchWrapper';

import './MainMenu.css';

class MainMenu extends React.PureComponent {
  render() {
    return (
      <div>
        <TensesMenu />
        <PeopleMenu />
        <VerbsMenu />
      </div>
    );
  }
}

export default ConjugationsFetchWrapper(MainMenu, true);
