import * as React from 'react';
import { Provider } from 'react-redux';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import AppBar from './features/common/components/AppBar';
// import MainMenu from './features/menu/components/MainMenu';
import StartEndGameButton from './features/common/containers/StartEndGameButton';
import MainSection from './features/common/containers/MainSection';
// import OptionsMenu from './features/options/containers/OptionsMenu';

import './App.css';
import store from './store';

class App extends React.PureComponent {
  render() {
    return (
      <Provider store={store}>
        <MuiThemeProvider>
          <div>
            <AppBar />
            <StartEndGameButton />
            <MainSection />
          </div>
        </MuiThemeProvider>
      </Provider>
    );
  }
}

export default App;
