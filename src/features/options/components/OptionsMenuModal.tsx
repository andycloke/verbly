import * as React from 'react';
import Dialog from 'material-ui/Dialog';

import OptionsMenu from '../containers/OptionsMenu';
import { Props } from '../containers/OptionsMenuModal';

const OptionsMenuModal = ({ open, toggleOptionsMenuOpen }: Props) => {
  const handleRequestClose = (buttonClicked: boolean): void =>
    toggleOptionsMenuOpen();
  return (
    <Dialog open={open} onRequestClose={handleRequestClose}>
      <OptionsMenu />
    </Dialog>
  );
};

export default OptionsMenuModal;
