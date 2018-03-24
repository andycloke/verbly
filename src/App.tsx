import * as React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import AppBar from './features/common/components/AppBar';
import MainMenu from './features/menu/components/MainMenu';
import Game from './features/game/containers/Game';
import StartEndGameButton from './features/common/components/StartEndGameButton';

import { pathToHome, pathToGame } from './paths';
// import OptionsMenu from './features/options/containers/OptionsMenu';

import store from './store';

class App extends React.PureComponent {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <MuiThemeProvider>
            <div>
              <AppBar />
              <StartEndGameButton />
              <Switch>
                <Route exact path={pathToHome()} component={MainMenu} />
                <Route exact path={pathToGame()} component={Game} />
                <Redirect to={pathToHome()} />
              </Switch>
            </div>
          </MuiThemeProvider>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
