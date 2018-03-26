import { connect } from 'react-redux';

import { getProgressBarProps } from '../selectors';
import ProgressBar from '../components/ProgressBar';

export type StateProps = {
  questionsCorrect: number;
  questionsCorrectTarget: number;
};

const mapStateToProps = (state: any): StateProps => getProgressBarProps(state);

export type Props = StateProps;
export default connect(mapStateToProps)(ProgressBar);
