import { connect } from 'react-redux';

import { getOptionsMenuProps } from '../selectors';
import OptionsMenu from '../components/OptionsMenu';
import { toggleEnglishInfinitive, toggleAudioFeedback } from '../actions';

const mapStateToProps = (state: any) => getOptionsMenuProps(state);

const mapDispatchToProps = (dispatch: any) => ({
  toggleEnglishInfinitive: () => dispatch(toggleEnglishInfinitive()),
  toggleAudioFeedback: () => dispatch(toggleAudioFeedback())
});

export default connect(mapStateToProps, mapDispatchToProps)(OptionsMenu);
