import * as React from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentSend from 'material-ui/svg-icons/content/send';

import './SubmitButton.css';

type Props = {
  onMouseDown: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const SubmitButton = ({ onMouseDown }: Props) => (
  <FloatingActionButton
    secondary
    mini
    className="SubmitButton__button"
    onMouseDown={onMouseDown}
  >
    <ContentSend />
  </FloatingActionButton>
);

export default SubmitButton;
