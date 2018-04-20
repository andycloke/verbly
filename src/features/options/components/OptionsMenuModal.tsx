import * as React from 'react';
import Dialog from 'material-ui/Dialog';
import { Tabs, Tab } from 'material-ui/Tabs';

import OptionsMenu from '../containers/OptionsMenu';
import { Props } from '../containers/OptionsMenuModal';

const tabStyle = {
  color: 'rgba(0, 0, 0, 0.54)',
  textTransform: 'none',
  fontSize: '13px'
};

const OptionsMenuModal = ({ open, toggleOptionsMenuOpen }: Props) => {
  const handleRequestClose = (buttonClicked: boolean): void =>
    toggleOptionsMenuOpen();
  return (
    <Dialog
      contentStyle={{ width: '86%' }}
      bodyStyle={{ padding: '15px' }}
      open={open}
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
        <Tab style={tabStyle} label="Keyboard shortcuts">
          <div>KEYBOARD SHORTCUTS</div>
        </Tab>
      </Tabs>
    </Dialog>
  );
};

export default OptionsMenuModal;
