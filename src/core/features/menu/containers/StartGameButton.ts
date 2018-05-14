import * as React from 'react';
import { connect } from 'react-redux';
import * as moment from 'moment';

import { startGame } from '../../game/actions';
import { getStartButtonProps } from '../selectors';

export type StateProps = {
  canStartGame: boolean;
};

export type DispatchProps = {
  startGame: () => void;
};

const mapStateToProps = (state: any): StateProps => getStartButtonProps(state);

const mapDispatchToProps = (dispatch: any): DispatchProps => ({
  startGame: () => dispatch(startGame(moment().format()))
});

export type Props = StateProps & DispatchProps;
export default (Component: React.ComponentType<any>) =>
  connect(mapStateToProps, mapDispatchToProps)(Component as any);
