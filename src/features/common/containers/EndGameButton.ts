import { connect } from 'react-redux';

import { endGame } from '../../game/actions';
import EndGameButton, { Props } from '../components/EndGameButton';

const mapDispatchToProps = (dispatch: any): Props => ({
  endGame: () => dispatch(endGame())
});

export default connect(undefined, mapDispatchToProps)(EndGameButton);
