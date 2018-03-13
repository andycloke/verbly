import { connect } from 'react-redux';

import { getVerbsInPlay } from '../selectors';
import { VerbsInPlay } from '../models';
import VerbsMenu, { VerbsMenuActionProps } from '../components/VerbsMenu';
import {
  setReflexiveVerbsInPlay,
  setIrregularVerbsInPlay,
  setWhichVerbsInPlay,
  updateUserDefinedVerbs
} from '../actions';

const mapStateToProps = (state: any): VerbsInPlay => getVerbsInPlay(state);

const mapDispatchToProps = (dispatch: any): VerbsMenuActionProps => ({
  setReflexiveVerbsInPlay: (option: string): any =>
    dispatch(setReflexiveVerbsInPlay(option)),
  setIrregularVerbsInPlay: (option: string): any =>
    dispatch(setIrregularVerbsInPlay(option)),
  setWhichVerbsInPlay: (option: string): any =>
    dispatch(setWhichVerbsInPlay(option)),
  updateUserDefinedVerbs: (verbs: Array<string>): any =>
    dispatch(updateUserDefinedVerbs(verbs))
});

export default connect(mapStateToProps, mapDispatchToProps)(VerbsMenu);
