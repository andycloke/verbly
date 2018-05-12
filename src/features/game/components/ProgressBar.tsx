import * as React from 'react';
import { Props } from '../../../core/features/game/containers/ProgressBar';
import LinearProgress from 'material-ui/LinearProgress';

import { positiveGreen } from './GameCard';

const ProgressBar = ({ questionsCorrect, questionsCorrectTarget }: Props) => (
  <LinearProgress
    value={questionsCorrect}
    max={questionsCorrectTarget}
    mode="determinate"
    color={positiveGreen}
    style={{ background: '#52ca5138' }}
  />
);

export default ProgressBar;
