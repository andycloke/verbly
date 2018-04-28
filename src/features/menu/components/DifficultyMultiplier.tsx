import * as React from 'react';

import { Props } from '../containers/DifficultyMultiplier';

import './DifficultyMultiplier.css';

const DifficultyMultiplier = ({ difficultyMultiplier }: Props) => (
  <span className="DifficultyMultiplier">
    {`Difficulty Multiplier: ${difficultyMultiplier}`}
  </span>
);

export default DifficultyMultiplier;
