import * as React from 'react';
import { connect } from 'react-redux';

import { getGameProps } from '../selectors';
import {
  initialiseGame,
  updateUserAnswer,
  submitAnswer,
  newQuestion
} from '../actions';

export type StateProps = {
  tense: string;
  person: string;
  verb: string;
  englishInfinitive: string;
  userAnswer: string;
  displayConjugations: boolean;
  userAnswerCorrect: boolean;
  correctAnswer: string;
  audioFeedback: boolean;
};

export type DispatchProps = {
  initialiseGame: () => void;
  updateUserAnswer: (userAnswer: string) => void;
  submitAnswer: () => void;
  newQuestion: () => void;
};

const mapStateToProps = (state: any): StateProps => getGameProps(state);

const mapDispatchToProps = (dispatch: any): DispatchProps => ({
  initialiseGame: () => dispatch(initialiseGame()),
  updateUserAnswer: (userAnswer: string) =>
    dispatch(updateUserAnswer(userAnswer)),
  submitAnswer: () => dispatch(submitAnswer()),
  newQuestion: () => dispatch(newQuestion())
});

export type Props = StateProps & DispatchProps;

export default (Component: React.ComponentType<any>) =>
  connect(mapStateToProps, mapDispatchToProps)(Component as any);
