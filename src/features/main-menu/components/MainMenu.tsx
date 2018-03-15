import * as React from 'react';

import PeopleMenu from '../../people/containers/PeopleMenu';
import TensesMenu from '../../tenses/containers/TensesMenu';
import VerbsMenu from '../../verbs/containers/VerbsMenu';

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