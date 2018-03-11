import * as React from 'react';
import { Provider } from 'react-redux';

import OptionsMenu from './features/options/containers/OptionsMenu';

import './App.css';
import store from './store';

const logo = require('./logo.svg');

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <OptionsMenu />
        </div>
      </Provider>
    );
  }
}

export default App;
