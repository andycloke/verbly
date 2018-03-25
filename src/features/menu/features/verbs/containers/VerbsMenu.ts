import { connect } from 'react-redux';

import { getVerbsMenuProps } from '../selectors';
import VerbsMenu from '../components/VerbsMenu';
import {
  setReflexiveVerbsInPlay,
  setIrregularVerbsInPlay,
  setWhichVerbsInPlay,
  updateUserDefinedVerbs
} from '../actions';
import { VerbsIncludedOptions, WhichVerbsOptions } from '../models';

export type StateProps = {
  reflexive: VerbsIncludedOptions;
  irregular: VerbsIncludedOptions;
  whichVerbs: WhichVerbsOptions;
  userDefinedVerbs: Array<string>;
  conjugationsFetched: boolean;
};

const mapStateToProps = (state: any): StateProps => getVerbsMenuProps(state);

type DispatchProps = {
  setReflexiveVerbsInPlay: (option: string) => any;
  setIrregularVerbsInPlay: (option: string) => any;
  setWhichVerbsInPlay: (option: string) => any;
  updateUserDefinedVerbs: (verbs: Array<string>) => any;
};

const mapDispatchToProps = (dispatch: any): DispatchProps => ({
  setReflexiveVerbsInPlay: (option: string): any =>
    dispatch(setReflexiveVerbsInPlay(option)),
  setIrregularVerbsInPlay: (option: string): any =>
    dispatch(setIrregularVerbsInPlay(option)),
  setWhichVerbsInPlay: (option: string): any =>
    dispatch(setWhichVerbsInPlay(option)),
  updateUserDefinedVerbs: (verbs: Array<string>): any =>
    dispatch(updateUserDefinedVerbs(verbs))
});

export type Props = DispatchProps & StateProps;
export default connect(mapStateToProps, mapDispatchToProps)(VerbsMenu);
