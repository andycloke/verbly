import { connect } from 'react-redux';
import { getDifficultyFactor } from '../selectors';
import DifficultyFactor from '../components/DifficultyFactor';

export type StateProps = {
  difficultyFactor: number;
};

const mapStateToProps = (state: any): StateProps => ({
  difficultyFactor: getDifficultyFactor(state)
});

export type Props = StateProps;
export default connect(mapStateToProps)(DifficultyFactor);
