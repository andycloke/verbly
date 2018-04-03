import * as React from 'react';
import { Link } from 'react-router-dom';
import Cancel from 'material-ui/svg-icons/navigation/cancel';
import RaisedButton from 'material-ui/RaisedButton';

import { pathToHome } from '../../../paths';

export type Props = {
  resetGame: () => void;
};

const EndGameButton = ({ resetGame }: Props) => {
  const handleClick = (e: React.MouseEvent<HTMLElement>): void => resetGame();
  return (
    <Link to={pathToHome()}>
      <RaisedButton
        onClick={handleClick}
        secondary
        label="Quit"
        labelPosition="before"
        icon={<Cancel />}
      />
    </Link>
  );
};

export default EndGameButton;
