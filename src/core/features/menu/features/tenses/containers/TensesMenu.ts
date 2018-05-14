import * as React from 'react';
import { connect } from 'react-redux';

import { getTensesMenuProps } from '../selectors';
import { toggleTenseInPlay } from '../actions';

import { TensesInPlay } from '../models';

export type TensesMenuStateProps = {
  inPlay: TensesInPlay;
};

type TensesMenuDispatchProps = {
  toggleTenseInPlay: (tense: string) => any;
};
const mapStateToProps = (state: any) => getTensesMenuProps(state);

const mapDispatchToProps = (dispatch: any) => ({
  toggleTenseInPlay: (tense: string) => dispatch(toggleTenseInPlay(tense))
});

export type Props = TensesMenuStateProps & TensesMenuDispatchProps;

export default (Component: React.ComponentType<any>) =>
  connect(mapStateToProps, mapDispatchToProps)(Component);
