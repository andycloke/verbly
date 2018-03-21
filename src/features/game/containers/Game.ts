import { connect } from 'react-redux';

import { fetchConjugationsIfNotFetched } from '../../conjugations/actions/fetch';

import { getGameProps } from '../selectors';
import Game, { DispatchProps } from '../components/Game';

const mapStateToProps = (state: any) => getGameProps(state);

const mapDispatchToProps = (dispatch: any): DispatchProps => ({
  fetchConjugationsIfNotFetched: async () =>
    dispatch(fetchConjugationsIfNotFetched())
});

export default connect(mapStateToProps, mapDispatchToProps)(Game as any);
