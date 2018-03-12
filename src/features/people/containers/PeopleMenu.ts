import { connect } from 'react-redux';

import { getPeopleMenuProps } from '../selectors';
import PeopleMenu from '../components/PeopleMenu';
import { togglePersonInPlay } from '../actions';

const mapStateToProps = (state: any) => getPeopleMenuProps(state);

const mapDispatchToProps = (dispatch: any) => ({
  togglePersonInPlay: (person: string) => dispatch(togglePersonInPlay(person))
});

export default connect(mapStateToProps, mapDispatchToProps)(PeopleMenu);
