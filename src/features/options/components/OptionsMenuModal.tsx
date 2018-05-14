import * as React from 'react';
import Dialog from 'material-ui/Dialog';
import { Tabs, Tab } from 'material-ui/Tabs';
import { withRouter, RouteComponentProps } from 'react-router-dom';

import OptionsMenu from '../containers/OptionsMenu';
import KeyboardShortcuts from './KeyboardShortcuts';
import { pathToHome } from '../../../paths';

const tabStyle = {
  minWidth: 122,
  color: 'rgba(0, 0, 0, 0.54)',
  textTransform: 'none',
  fontSize: '13px'
};

type Props = RouteComponentProps<any>;

const OptionsMenuModal = ({ history }: Props) => {
  const handleRequestClose = (buttonClicked: boolean): void => {
    history.push(pathToHome());
  };
  return (
    <Dialog
      contentStyle={{ width: '86%' }}
      bodyStyle={{ padding: '15px' }}
      open
      onRequestClose={handleRequestClose}
    >
      <Tabs
        tabItemContainerStyle={{ backgroundColor: '#f7f7f7' }}
        inkBarStyle={{ backgroundColor: 'rgb(1, 188, 213)' }}
        initialSelectedIndex={0}
      >
        <Tab style={tabStyle} label="Options">
          <OptionsMenu />
        </Tab>
        <Tab style={tabStyle} label="Keyboard Shortcuts">
          <KeyboardShortcuts />
        </Tab>
      </Tabs>
    </Dialog>
  );
};

export default withRouter(OptionsMenuModal);
