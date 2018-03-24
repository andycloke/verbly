import { connect } from 'react-redux';

import AppBar from '../components/AppBar';
import { toggleOptionsMenuOpen } from '../../options/actions';

export type DispatchProps = {
  toggleOptionsMenuOpen: () => any;
};

const mapDispatchToProps = (dispatch: any): DispatchProps => ({
  toggleOptionsMenuOpen: () => dispatch(toggleOptionsMenuOpen())
});

export default connect(undefined, mapDispatchToProps)(AppBar);
