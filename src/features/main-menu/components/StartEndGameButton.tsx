import * as React from 'react';

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
    />
  );
};

export default StartEndGameButton;
