import { connect } from 'react-redux';

import { startGame } from '../../game/actions';
import StartGameButton from '../components/StartGameButton';
import { getStartButtonProps } from '../selectors';

export type StateProps = {
  canStartGame: boolean;
};

export type DispatchProps = {
  startGame: () => void;
};

const mapStateToProps = (state: any): StateProps => getStartButtonProps(state);

const mapDispatchToProps = (dispatch: any): DispatchProps => ({
  startGame: () => dispatch(startGame())
});

export type Props = StateProps & DispatchProps;
export default connect(mapStateToProps, mapDispatchToProps)(StartGameButton);
