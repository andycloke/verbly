import { connect } from 'react-redux';

import { getTensesMenuProps } from '../selectors';
import TensesMenu from '../components/TensesMenu';
import { toggleTenseInPlay } from '../actions';

const mapStateToProps = (state: any) => getTensesMenuProps(state);

const mapDispatchToProps = (dispatch: any) => ({
  toggleTenseInPlay: (tense: string) => dispatch(toggleTenseInPlay(tense))
});

export default connect(mapStateToProps, mapDispatchToProps)(TensesMenu);
