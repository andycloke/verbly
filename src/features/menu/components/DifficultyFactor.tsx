import * as React from 'react';

import { Props } from '../containers/DifficultyFactor';

import './DifficultyFactor.css';

const DifficultyFactor = ({ difficultyFactor }: Props) => (
  <span className="DifficultyFactor">
    {`Difficulty Factor: ${difficultyFactor}`}
  </span>
);

export default DifficultyFactor;
