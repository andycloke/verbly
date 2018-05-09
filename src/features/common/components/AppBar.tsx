import * as React from 'react';
import { Link } from 'react-router-dom';
import MaterialAppBar from 'material-ui/AppBar';
import SettingsIcon from 'material-ui/svg-icons/action/settings';
import FlatButton from 'material-ui/FlatButton';

import { pathToHome } from '../../../paths';
import { DispatchProps } from '../containers/AppBar';
import AppBarEndGameButton from '../containers/AppBarEndGameButton';

import './AppBar.css';

const AppBar = ({ toggleOptionsMenuOpen }: DispatchProps) => {
  const handleOptionsClick = (e: React.MouseEvent<HTMLButtonElement>): void =>
    toggleOptionsMenuOpen();
  return (
    <MaterialAppBar
      className="AppBar__outer"
      title={<Link to={pathToHome()}>Verbly</Link>}
      iconElementRight={
        <FlatButton
          label="Options"
          icon={<SettingsIcon />}
          onClick={handleOptionsClick}
        />
      }
      iconElementLeft={<AppBarEndGameButton />}
    />
  );
};

export default AppBar;
