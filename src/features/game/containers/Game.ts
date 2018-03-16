import { connect } from 'react-redux';

import { getGameProps } from '../selectors';
import Game from '../components/Game';

const mapStateToProps = (state: any) => getGameProps(state);

const mapDispatchToProps = (dispatch: any) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Game);
