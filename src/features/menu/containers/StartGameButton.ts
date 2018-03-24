import { connect } from 'react-redux';

import { startGame } from '../../game/actions';
import StartGameButton, { Props } from '../components/StartGameButton';

const mapDispatchToProps = (dispatch: any): Props => ({
  startGame: () => dispatch(startGame())
});

export default connect(undefined, mapDispatchToProps)(StartGameButton);
