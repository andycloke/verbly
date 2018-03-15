import * as React from 'react';

import PeopleMenu from '../features/people/containers/PeopleMenu';
import TensesMenu from '../features/tenses/containers/TensesMenu';
import VerbsMenu from '../features/verbs/containers/VerbsMenu';

import './MainMenu.css';

export default class MainMenu extends React.PureComponent {
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
