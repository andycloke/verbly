import { connect } from 'react-redux';

import { getGameProps } from '../selectors';
import { initialiseGame } from '../actions';
import GameComp from '../components/Game';
import ConjugationsFetchWrapper from '../../conjugations/containers/ConjugationsFetchWrapper';

export type StateProps = {
  tense: string;
  person: string;
  verb: string;
};

export type DispatchProps = {
  initialiseGame: () => void;
};

const mapStateToProps = (state: any): StateProps => getGameProps(state);

const mapDispatchToProps = (dispatch: any): DispatchProps => ({
  initialiseGame: () => dispatch(initialiseGame())
});

const Game = connect(mapStateToProps, mapDispatchToProps)(GameComp as any);

export default ConjugationsFetchWrapper(Game);
