import * as React from 'react';
import { connect } from 'react-redux';
import { getDifficultyMultiplier } from '../selectors';

export type StateProps = {
  difficultyMultiplier: number;
};

const mapStateToProps = (state: any): StateProps => ({
  difficultyMultiplier: getDifficultyMultiplier(state)
});

export type Props = StateProps;
export default (Component: React.ComponentType<any>) =>
  connect(mapStateToProps)(Component);
