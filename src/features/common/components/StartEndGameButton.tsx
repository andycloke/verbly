import * as React from 'react';
import ArrowRight from 'material-ui/svg-icons/hardware/keyboard-arrow-right';
import Cancel from 'material-ui/svg-icons/navigation/cancel';

import RaisedButton from 'material-ui/RaisedButton';

export type Props = {
  gameStarted: boolean;
  toggleStartGame: () => void;
};

const StartEndGameButton = ({ toggleStartGame, gameStarted }: Props) => {
  const handleClick = (event: React.MouseEvent<HTMLElement>): void =>
    toggleStartGame();
  return (
    <RaisedButton
      secondary
      onClick={handleClick}
      label={gameStarted ? 'Quit' : 'Play'}
      icon={gameStarted ? <Cancel /> : <ArrowRight />}
    />
  );
};

export default StartEndGameButton;
