import { connect } from 'react-redux';

import { getOptionModalOpen } from '../selectors';
import OptionsMenuModal from '../components/OptionsMenuModal';
import { toggleOptionsMenuOpen } from '../actions';

export type StateProps = {
  open: boolean;
};

export type DispatchProps = {
  toggleOptionsMenuOpen: () => any;
};

const mapStateToProps = (state: any): StateProps => ({
  open: getOptionModalOpen(state)
});

const mapDispatchToProps = (dispatch: any): DispatchProps => ({
  toggleOptionsMenuOpen: () => dispatch(toggleOptionsMenuOpen())
});

export default connect(mapStateToProps, mapDispatchToProps)(
  OptionsMenuModal as any
);
