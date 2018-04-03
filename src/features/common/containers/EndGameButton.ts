import { connect } from 'react-redux';

import { resetGame } from '../../game/actions';
import EndGameButton, { Props } from '../components/EndGameButton';

const mapDispatchToProps = (dispatch: any): Props => ({
  resetGame: () => dispatch(resetGame())
});

export default connect(undefined, mapDispatchToProps, undefined, {
  pure: false
})(EndGameButton as any);
