import * as React from 'react';

import { Props } from '../containers/GameContainer';
import Game from '../containers/Game';
import Review from '../containers/Review';
import ProgressBar from '../containers/ProgressBar';

import './GameContainer.css';

const GameContainer = ({ reviewOpen }: Props) => {
  return (
    <div className="GameContainer__outer">
      <ProgressBar />
      {reviewOpen ? <Review /> : <Game />}
    </div>
  );
};

export default GameContainer;
