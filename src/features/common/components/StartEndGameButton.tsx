import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import StartGameButton from '../containers/StartGameButton';
import EndGameButton from '../containers/EndGameButton';

import { pathToHome, pathToGame } from '../../../paths';

const StartEndGameButton = () => (
  <Switch>
    <Route exact path={pathToHome()} component={StartGameButton} />
    <Route exact path={pathToGame()} component={EndGameButton} />
  </Switch>
);

export default StartEndGameButton;
