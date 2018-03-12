import * as React from 'react';
import { Provider } from 'react-redux';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import OptionsMenu from './features/options/containers/OptionsMenu';
import PeopleMenu from './features/people/containers/PeopleMenu';
import TensesMenu from './features/tenses/containers/TensesMenu';

import './App.css';
import store from './store';

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <MuiThemeProvider>
          <div className="App">
            <OptionsMenu />
            <PeopleMenu />
            <TensesMenu />
          </div>
        </MuiThemeProvider>
      </Provider>
    );
  }
}

export default App;
