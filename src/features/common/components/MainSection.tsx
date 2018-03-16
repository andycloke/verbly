import * as React from 'react';

import MainMenu from '../../../features/menu/components/MainMenu';
import Game from '../../../features/game/containers/Game';

type Props = {
  gameStarted: boolean;
};

const MainSection = ({ gameStarted }: Props) =>
  gameStarted ? <Game /> : <MainMenu />;

export default MainSection;
