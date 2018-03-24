import * as React from 'react';
import { Link } from 'react-router-dom';
import ArrowRight from 'material-ui/svg-icons/hardware/keyboard-arrow-right';
import RaisedButton from 'material-ui/RaisedButton';

import { pathToGame } from '../../../paths';

export type Props = {
  startGame: () => void;
};

const StartGameButton = ({ startGame }: Props) => {
  const handleClick = (e: React.MouseEvent<HTMLElement>): void => startGame();
  return (
    <Link to={pathToGame()}>
      <RaisedButton
        onClick={handleClick}
        secondary
        label="Play"
        labelPosition="before"
        icon={<ArrowRight />}
      />
    </Link>
  );
};

export default StartGameButton;
