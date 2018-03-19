import { connect } from 'react-redux';

import { fetchConjugations } from '../../conjugations/actions/fetch';

import { getGameProps } from '../selectors';
import Game, { DispatchProps } from '../components/Game';

const mapStateToProps = (state: any) => getGameProps(state);

const mapDispatchToProps = (dispatch: any): DispatchProps => ({
  fetchConjugations: async () => dispatch(fetchConjugations())
});

export default connect(mapStateToProps, mapDispatchToProps)(Game as any);
