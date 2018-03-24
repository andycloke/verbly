import * as React from 'react';
import MaterialAppBar from 'material-ui/AppBar';
import SettingsIcon from 'material-ui/svg-icons/action/settings';
import FlatButton from 'material-ui/FlatButton';

import { DispatchProps } from '../containers/AppBar';
import EndGameButton from '../containers/EndGameButton';

const AppBar = ({ toggleOptionsMenuOpen }: DispatchProps) => {
  const handleOptionsClick = (e: React.MouseEvent<HTMLButtonElement>): void =>
    toggleOptionsMenuOpen();
  return (
    <MaterialAppBar
      title="Verbly"
      iconElementRight={
        <FlatButton
          label="Options"
          icon={<SettingsIcon />}
          onClick={handleOptionsClick}
        />
      }
      iconElementLeft={<EndGameButton />}
    />
  );
};

export default AppBar;
