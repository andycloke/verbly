import { connect } from 'react-redux';

import { getGameProps } from '../selectors';
import { initialiseGame, updateUserAnswer, submitAnswer } from '../actions';
import GameComp from '../components/Game';
import ConjugationsFetchWrapper from '../../conjugations/containers/ConjugationsFetchWrapper';

export type StateProps = {
  tense: string;
  person: string;
  verb: string;
  englishInfinitive: string;
  userAnswer: string;
};

export type DispatchProps = {
  initialiseGame: () => void;
  updateUserAnswer: (userAnswer: string) => void;
  submitAnswer: () => void;
};

const mapStateToProps = (state: any): StateProps => getGameProps(state);

const mapDispatchToProps = (dispatch: any): DispatchProps => ({
  initialiseGame: () => dispatch(initialiseGame()),
  updateUserAnswer: (userAnswer: string) =>
    dispatch(updateUserAnswer(userAnswer)),
  submitAnswer: () => dispatch(submitAnswer())
});

const Game = connect(mapStateToProps, mapDispatchToProps)(GameComp as any);

export default ConjugationsFetchWrapper(Game);
