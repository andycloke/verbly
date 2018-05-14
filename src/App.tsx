import * as React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import * as ReactGA from 'react-ga';
import { PersistGate } from 'redux-persist/integration/react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import AppBar from './features/common/components/AppBar';
import MainMenu from './features/menu/components/MainMenu';
import GameContainer from './features/game/containers/GameContainer';

import { pathToHome, pathToGame } from './paths';

import store from './store';
import './App.css';

ReactGA.initialize('UA-99771850-1');
ReactGA.pageview(window.location.pathname + window.location.search);

class App extends React.PureComponent {
  render() {
    return (
      <Provider store={store().store}>
        <PersistGate loading={null} persistor={store().persistor}>
          <BrowserRouter>
            <MuiThemeProvider>
              <div>
                <AppBar />
                <div className="App__inner">
                  <Switch>
                    <Route path={pathToHome()} component={MainMenu} />
                    <Route
                      exact
                      path={pathToGame()}
                      component={GameContainer}
                    />
                    <Redirect to={pathToHome()} />
                  </Switch>
                </div>
              </div>
            </MuiThemeProvider>
          </BrowserRouter>
        </PersistGate>
      </Provider>
    );
  }
}

export default App;
