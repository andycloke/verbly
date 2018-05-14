import * as React from 'react';
import { Link } from 'react-router-dom';
import MaterialAppBar from 'material-ui/AppBar';
import SettingsIcon from 'material-ui/svg-icons/action/settings';
import FlatButton from 'material-ui/FlatButton';

import { pathToHome, pathToOptions } from '../../../paths';
import AppBarEndGameButton from '../containers/AppBarEndGameButton';

import './AppBar.css';

const AppBar = () => {
  return (
    <MaterialAppBar
      className="AppBar__outer"
      title={<Link to={pathToHome()}>Verbly</Link>}
      iconElementRight={
        <Link to={pathToOptions()}>
          <FlatButton
            label="Options"
            icon={<SettingsIcon />}
            style={{ color: 'white', marginTop: 7 }}
          />
        </Link>
      }
      iconElementLeft={<AppBarEndGameButton />}
    />
  );
};

export default AppBar;
