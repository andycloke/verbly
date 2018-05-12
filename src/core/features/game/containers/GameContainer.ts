import * as React from 'react';
import { connect } from 'react-redux';

import { getGameContainerProps } from '../selectors';

export type StateProps = {
  reviewOpen: boolean;
};

const mapStateToProps = (state: any): StateProps =>
  getGameContainerProps(state);

export type Props = StateProps;

export default (Component: React.ComponentType<any>) =>
  connect(mapStateToProps)(Component);
