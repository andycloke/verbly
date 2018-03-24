import * as React from 'react';
import { connect } from 'react-redux';

import { endGame } from '../../game/actions';
import EndGameButton, { Props } from '../components/EndGameButton';

const mapDispatchToProps = (dispatch: any): Props => ({
  endGame: () => dispatch(endGame())
});

export const connectEndGameButton = (Component: React.Component<Props>) => {
  return connect(undefined, mapDispatchToProps, undefined, {
    pure: false
  })(Component as any);
};

export default connectEndGameButton(EndGameButton as any);
