import { connect } from 'react-redux';
import { getDifficultyMultiplier } from '../selectors';
import DifficultyMultiplier from '../components/DifficultyMultiplier';

export type StateProps = {
  difficultyMultiplier: number;
};

const mapStateToProps = (state: any): StateProps => ({
  difficultyMultiplier: getDifficultyMultiplier(state)
});

export type Props = StateProps;
export default connect(mapStateToProps)(DifficultyMultiplier);
