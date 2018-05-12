import { connect } from 'react-redux';

import { resetGame } from '../../../core/features/game/actions';
import AppBarEndGameButton, { Props } from '../components/AppBarEndGameButton';

const mapDispatchToProps = (dispatch: any): Props => ({
  resetGame: () => dispatch(resetGame())
});

export default connect(undefined, mapDispatchToProps, undefined, {
  pure: false
})(AppBarEndGameButton as any);
