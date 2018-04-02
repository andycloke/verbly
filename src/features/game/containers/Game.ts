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
  userAnswerCorrect: boolean;
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

const Game = connect(mapStateToProps, mapDispatchToProps)(GameComp as any);

export type Props = StateProps & DispatchProps;
export default ConjugationsFetchWrapper(Game);
