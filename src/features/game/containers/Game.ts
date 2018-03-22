import { connect } from 'react-redux';

import { getGameProps } from '../selectors';
import GameComp from '../components/Game';
import ConjugationsFetchWrapper from '../../conjugations/containers/ConjugationsFetchWrapper';

export type StateProps = {};

export type DispatchProps = {};

const mapStateToProps = (state: any): StateProps => getGameProps(state);

const mapDispatchToProps = (dispatch: any): DispatchProps => ({});

const Game = connect(mapStateToProps, mapDispatchToProps)(GameComp as any);

export default ConjugationsFetchWrapper(Game);
