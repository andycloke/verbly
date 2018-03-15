import { connect } from 'react-redux';

import { getGameStarted } from '../../game/selectors';
import { startGame, endGame } from '../../game/actions';
import StartEndGameButton, {
  Props as ComponentProps
} from '../components/StartEndGameButton';

export type Props = {
  gameStarted: boolean;
};

export type Actions = {
  startGame: () => void;
  endGame: () => void;
};

const mapStateToProps = (state: any): Props => ({
  gameStarted: getGameStarted(state)
});

const mapDispatchToProps = (dispatch: any): Actions => ({
  startGame: () => dispatch(startGame()),
  endGame: () => dispatch(endGame())
});

const mergeProps = (
  { gameStarted }: Props,
  actions: Actions
): ComponentProps => ({
  gameStarted,
  toggleStartGame: gameStarted ? actions.endGame : actions.startGame
});

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(
  StartEndGameButton
);
