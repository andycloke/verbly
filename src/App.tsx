import * as React from 'react';
import { Provider } from 'react-redux';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';

import MainMenu from './features/main-menu/components/MainMenu';
import OptionsMenu from './features/options/containers/OptionsMenu';

import './App.css';
import store from './store';

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <MuiThemeProvider>
          <div className="App">
            <AppBar title="Verbly" />
            <MainMenu />
            <OptionsMenu />
          </div>
        </MuiThemeProvider>
      </Provider>
    );
  }
}

export default App;
