import * as React from 'react';
import { connect } from 'react-redux';

import { getVerbsMenuProps } from '../selectors';
import {
  setReflexiveVerbsInPlay,
  setIrregularVerbsInPlay,
  setWhichVerbsInPlay,
  updateUserDefinedVerbs,
  toggleVerbEndingInPlay
} from '../actions';
import { VerbsIncludedOptions, WhichVerbsOptions } from '../models';

export type StateProps = {
  reflexive: VerbsIncludedOptions;
  irregular: VerbsIncludedOptions;
  whichVerbs: WhichVerbsOptions;
  userDefinedVerbs: Array<string>;
  conjugationsFetched: boolean;
  erVerbsInPlay: boolean;
  arVerbsInPlay: boolean;
  irVerbsInPlay: boolean;
};

const mapStateToProps = (state: any): StateProps => getVerbsMenuProps(state);

type DispatchProps = {
  setReflexiveVerbsInPlay: (option: string) => any;
  setIrregularVerbsInPlay: (option: string) => any;
  setWhichVerbsInPlay: (option: string) => any;
  toggleVerbEndingInPlay: (ending: string) => any;
  updateUserDefinedVerbs: (verbs: Array<string>) => any;
};

const mapDispatchToProps = (dispatch: any): DispatchProps => ({
  setReflexiveVerbsInPlay: (option: string): any =>
    dispatch(setReflexiveVerbsInPlay(option)),
  setIrregularVerbsInPlay: (option: string): any =>
    dispatch(setIrregularVerbsInPlay(option)),
  setWhichVerbsInPlay: (option: string): any =>
    dispatch(setWhichVerbsInPlay(option)),
  toggleVerbEndingInPlay: (ending: string): any =>
    dispatch(toggleVerbEndingInPlay(ending)),
  updateUserDefinedVerbs: (verbs: Array<string>): any =>
    dispatch(updateUserDefinedVerbs(verbs))
});

export type Props = DispatchProps & StateProps;
export default (Component: React.ComponentType<any>) =>
  connect(mapStateToProps, mapDispatchToProps)(Component);
