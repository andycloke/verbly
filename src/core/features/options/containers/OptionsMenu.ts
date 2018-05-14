import * as React from 'react';
import { connect } from 'react-redux';

import { getOptionsMenuProps } from '../selectors';
import { toggleEnglishInfinitive, toggleAudioFeedback } from '../actions';

export type StateProps = {
  displayEnglishInfinitive: boolean;
  audioFeedback: boolean;
};

type DispatchProps = {
  toggleEnglishInfinitive: () => any;
  toggleAudioFeedback: () => any;
};

const mapStateToProps = (state: any): StateProps => getOptionsMenuProps(state);

const mapDispatchToProps = (dispatch: any): DispatchProps => ({
  toggleEnglishInfinitive: () => dispatch(toggleEnglishInfinitive()),
  toggleAudioFeedback: () => dispatch(toggleAudioFeedback())
});

export type Props = StateProps & DispatchProps;
export default (Component: React.ComponentType<any>) =>
  connect(mapStateToProps, mapDispatchToProps)(Component);
