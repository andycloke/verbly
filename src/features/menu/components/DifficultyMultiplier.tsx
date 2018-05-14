import * as React from 'react';

import { Props } from '../../../core/features/menu/containers/DifficultyMultiplier';

import './DifficultyMultiplier.css';

const DifficultyMultiplier = ({ difficultyMultiplier }: Props) => (
  <span className="DifficultyMultiplier">
    {`Difficulty: ${difficultyMultiplier}`}
  </span>
);

export default DifficultyMultiplier;
