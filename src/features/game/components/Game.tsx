import * as React from 'react';
import Paper from 'material-ui/Paper';

type Props = {};

import './Game.css';

const Game = ({  }: Props) => {
  return (
    <Paper>
      <div className="Game__wrapper">
        <span>Tense</span>
        <span>Present</span>
        <span>5</span>
        <span>Verb</span>
        <span>Correr - to run</span>
        <span>3</span>
      </div>
    </Paper>
  );
};

export default Game;
