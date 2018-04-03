import { connect } from 'react-redux';
import * as moment from 'moment';

import { getReviewProps } from '../selectors';
import { startGame, resetGame } from '../actions';
import Review from '../components/Review';

export type StateProps = {
  questionsCorrect: number;
  questionsAnswered: number;
  gameDuration: number;
};

const mapStateToProps = (state: any): StateProps => getReviewProps(state);

export type DispatchProps = {
  startGame: () => void;
  resetGame: () => void;
};

const mapDispatchToProps = (dispatch: any): DispatchProps => ({
  startGame: () => dispatch(startGame(moment().format())),
  resetGame: () => dispatch(resetGame())
});

export type Props = StateProps & DispatchProps;
export default connect(mapStateToProps, mapDispatchToProps)(Review as any);
