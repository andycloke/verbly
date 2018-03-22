import { connect } from 'react-redux';

import { getGameProps } from '../selectors';
import { initialiseGame, updateUserAnswer } from '../actions';
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
};

const mapStateToProps = (state: any): StateProps => getGameProps(state);

const mapDispatchToProps = (dispatch: any): DispatchProps => ({
  initialiseGame: () => dispatch(initialiseGame()),
  updateUserAnswer: (userAnswer: string) =>
    dispatch(updateUserAnswer(userAnswer))
});

const Game = connect(mapStateToProps, mapDispatchToProps)(GameComp as any);

export default ConjugationsFetchWrapper(Game);
