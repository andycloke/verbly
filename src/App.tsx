import * as React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import AppBar from './features/common/containers/AppBar';
import MainMenu from './features/menu/components/MainMenu';
import GameContainer from './features/game/containers/GameContainer';

import { pathToHome, pathToGame } from './paths';
import OptionsMenuModal from './features/options/containers/OptionsMenuModal';

import store from './store';
import './App.css';

class App extends React.PureComponent {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <MuiThemeProvider>
            <div>
              <AppBar />
              <div className="App__inner">
                <Switch>
                  <Route exact path={pathToHome()} component={MainMenu} />
                  <Route exact path={pathToGame()} component={GameContainer} />
                  <Redirect to={pathToHome()} />
                </Switch>
              </div>
              <OptionsMenuModal />
            </div>
          </MuiThemeProvider>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
