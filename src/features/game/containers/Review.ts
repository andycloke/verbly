import { connect } from 'react-redux';

import { getReviewProps } from '../selectors';
import { startGame, endGame } from '../actions';
import Review from '../components/Review';

export type StateProps = {
  questionsCorrect: number;
  questionsAnswered: number;
};

const mapStateToProps = (state: any): StateProps => getReviewProps(state);

export type DispatchProps = {
  startGame: () => void;
  endGame: () => void;
};

const mapDispatchToProps = (dispatch: any): DispatchProps => ({
  startGame: () => dispatch(startGame()),
  endGame: () => dispatch(endGame())
});

export type Props = StateProps & DispatchProps;
export default connect(mapStateToProps, mapDispatchToProps)(Review as any);
