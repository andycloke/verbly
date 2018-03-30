import * as React from 'react';

import RaisedButton from 'material-ui/RaisedButton';
const letterButtonStyle = {
  minWidth: '44px',
  margin: '0 3px'
};

type Props = {
  letter: string;
  onMouseDown: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const AccentedLetterKey = ({ letter, onMouseDown }: Props) => (
  <RaisedButton
    label={letter}
    onMouseDown={onMouseDown}
    primary
    style={letterButtonStyle}
  />
);

export default AccentedLetterKey;
