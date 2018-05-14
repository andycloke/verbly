import * as React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

import { Props } from '../../../core/features/menu/containers/CantStartModal';

const CantStartModal = ({ missingItems, open, closeModal }: Props) => {
  let missingItemsText = '';
  if (missingItems.length === 3) {
    missingItemsText = `${missingItems[0]}, ${missingItems[1]} & ${
      missingItems[2]
    }`;
  } else if (missingItems.length === 2) {
    missingItemsText = `${missingItems[0]} & ${missingItems[1]}`;
  } else {
    missingItemsText = missingItems[0];
  }
  const handleRequestClose = (buttonClicked: boolean): void => closeModal();
  const handleCloseClick = (e: React.MouseEvent<HTMLButtonElement>): void =>
    closeModal();
  return (
    <Dialog
      title="Can't start game"
      open={open}
      onRequestClose={handleRequestClose}
      actions={[
        <FlatButton
          primary
          label="Close"
          key="close-button"
          onClick={handleCloseClick}
        />
      ]}
    >
      {`Add some more ${missingItemsText}.`}
    </Dialog>
  );
};

export default CantStartModal;
