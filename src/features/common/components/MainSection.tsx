import * as React from 'react';

import MainMenu from '../../../features/menu/components/MainMenu';

type Props = {
  gameStarted: boolean;
};

const MainSection = ({ gameStarted }: Props) =>
  gameStarted ? <h1>PLAYING</h1> : <MainMenu />;

export default MainSection;
