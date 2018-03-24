import * as React from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentSend from 'material-ui/svg-icons/content/send';

import './SubmitButton.css';

type Props = {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const SubmitButton = ({ onClick }: Props) => (
  <FloatingActionButton
    secondary
    mini
    className="SubmitButton__button"
    onClick={onClick}
  >
    <ContentSend />
  </FloatingActionButton>
);

export default SubmitButton;
