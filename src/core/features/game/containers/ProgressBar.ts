import * as React from 'react';
import { connect } from 'react-redux';

import { getProgressBarProps } from '../selectors';

export type StateProps = {
  questionsCorrect: number;
  questionsCorrectTarget: number;
};

const mapStateToProps = (state: any): StateProps => getProgressBarProps(state);

export type Props = StateProps;
export default (Component: React.ComponentType<any>) =>
  connect(mapStateToProps)(Component);
