import { connect } from 'react-redux';

import { getGameContainerProps } from '../selectors';
import GameContainer from '../components/GameContainer';

export type StateProps = {
  reviewOpen: boolean;
};

const mapStateToProps = (state: any): StateProps =>
  getGameContainerProps(state);

export type Props = StateProps;
export default connect(mapStateToProps)(GameContainer);
