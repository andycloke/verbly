import { connect } from 'react-redux';

import { getOptionsMenuProps } from '../selectors';
import OptionsMenu from '../components/OptionsMenu';
import { toggleEnglishInfinitive } from '../actions';

const mapStateToProps = (state: any) => getOptionsMenuProps(state);

const mapDispatchToProps = (dispatch: any) => ({
  toggleEnglishInfinitive: () => dispatch(toggleEnglishInfinitive())
});

export default connect(mapStateToProps, mapDispatchToProps)(OptionsMenu);
