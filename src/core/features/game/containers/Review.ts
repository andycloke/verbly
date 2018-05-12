import * as React from 'react';
import * as moment from 'moment';
import { connect } from 'react-redux';

import { getReviewProps } from '../selectors';
import { startGame, resetGame } from '../actions';

export type StateProps = {
  questionsAnswered: number;
  questionsCorrect: number;
  timeTaken: number;
  difficultyMultiplier: number;
  gameScore: number;
  highScore: number;
  newHighScore: boolean;
};

const mapStateToProps = (state: any): StateProps => getReviewProps(state);

export type DispatchProps = {
  startGame: () => void;
  resetGame: () => void;
};

const mapDispatchToProps = (dispatch: any): DispatchProps => ({
  startGame: () => dispatch(startGame(moment().format())),
  resetGame: () => dispatch(resetGame())
});

export type Props = StateProps & DispatchProps;
export default (Component: React.ComponentType<any>) =>
  connect(mapStateToProps, mapDispatchToProps)(Component as any);
