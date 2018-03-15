import { connect } from 'react-redux';

import { getGameStarted } from '../../game/selectors';
import StartEndGameButton from '../components/MainSection';

export type Props = {
  gameStarted: boolean;
};

const mapStateToProps = (state: any): Props => ({
  gameStarted: getGameStarted(state)
});

export default connect(mapStateToProps)(StartEndGameButton);
