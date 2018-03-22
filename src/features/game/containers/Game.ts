import { connect } from 'react-redux';

import { getGameProps } from '../selectors';
import {
  initialiseGame,
  updateUserAnswer,
  submitAnswer,
  newQuestion
} from '../actions';
import GameComp from '../components/Game';
import ConjugationsFetchWrapper from '../../conjugations/containers/ConjugationsFetchWrapper';

export type StateProps = {
  tense: string;
  person: string;
  verb: string;
  englishInfinitive: string;
  userAnswer: string;
  displayConjugations: boolean;
};

export type PreMergeDispatchProps = {
  initialiseGame: () => void;
  updateUserAnswer: (userAnswer: string) => void;
  submitAnswer: () => void;
  newQuestion: () => void;
};

const mapStateToProps = (state: any): StateProps => getGameProps(state);

const mapDispatchToProps = (dispatch: any): PreMergeDispatchProps => ({
  initialiseGame: () => dispatch(initialiseGame()),
  updateUserAnswer: (userAnswer: string) =>
    dispatch(updateUserAnswer(userAnswer)),
  submitAnswer: () => dispatch(submitAnswer()),
  newQuestion: () => dispatch(newQuestion())
});

export type DispatchProps = {
  initialiseGame: () => void;
  updateUserAnswer: (userAnswer: string) => void;
  handleSubmitClick: () => void;
};

const mergeProps = (
  props: StateProps,
  actions: PreMergeDispatchProps
): StateProps & DispatchProps => ({
  ...props,
  initialiseGame: actions.initialiseGame,
  updateUserAnswer: actions.updateUserAnswer,
  handleSubmitClick: props.displayConjugations
    ? actions.newQuestion
    : actions.submitAnswer
});

const Game = connect(mapStateToProps, mapDispatchToProps, mergeProps)(
  GameComp as any
);

export default ConjugationsFetchWrapper(Game);
