import * as React from 'react';

import RaisedButton from 'material-ui/RaisedButton';
const letterButtonStyle = {
  minWidth: '44px',
  margin: '0 3px'
};

type Props = {
  letter: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const AccentedLetterKey = ({ letter, onClick }: Props) => (
  <RaisedButton
    label={letter}
    onClick={onClick}
    primary
    style={letterButtonStyle}
  />
);

export default AccentedLetterKey;
