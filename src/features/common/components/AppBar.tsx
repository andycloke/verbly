import * as React from 'react';
import MaterialAppBar from 'material-ui/AppBar';
import NavigationClose from 'material-ui/svg-icons/action/settings';
import FlatButton from 'material-ui/FlatButton';

import { DispatchProps } from '../containers/AppBar';

const AppBar = ({ toggleOptionsMenuOpen }: DispatchProps) => {
  const handleOptionsClick = (e: React.MouseEvent<HTMLButtonElement>): void =>
    toggleOptionsMenuOpen();
  return (
    <MaterialAppBar
      title="Verbly"
      showMenuIconButton={false}
      iconElementRight={
        <FlatButton
          label="Options"
          icon={<NavigationClose />}
          onClick={handleOptionsClick}
        />
      }
    />
  );
};

export default AppBar;
