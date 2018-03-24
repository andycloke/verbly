import * as React from 'react';
import MaterialAppBar from 'material-ui/AppBar';

type Props = {};

const AppBar = (props: Props) => {
  return <MaterialAppBar title="Verbly" showMenuIconButton={false} />;
};

export default AppBar;
