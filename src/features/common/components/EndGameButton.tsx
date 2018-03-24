import * as React from 'react';
import { Link } from 'react-router-dom';
import Cancel from 'material-ui/svg-icons/navigation/cancel';
import RaisedButton from 'material-ui/RaisedButton';

import { pathToHome } from '../../../paths';

export type Props = {
  endGame: () => void;
};

const EndGameButton = ({ endGame }: Props) => {
  const handleClick = (e: React.MouseEvent<HTMLElement>): void => endGame();
  return (
    <Link to={pathToHome()}>
      <RaisedButton
        onClick={handleClick}
        secondary
        label="Quit"
        icon={<Cancel />}
      />
    </Link>
  );
};

export default EndGameButton;
