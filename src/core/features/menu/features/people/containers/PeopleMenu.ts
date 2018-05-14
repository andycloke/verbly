import { connect } from 'react-redux';
import * as React from 'react';

import { getPeopleMenuProps } from '../selectors';
import { togglePersonInPlay } from '../actions';
import { PeopleInPlay } from '../models';

const mapStateToProps = (state: any) => getPeopleMenuProps(state);

export type PeopleMenuStateProps = {
  inPlay: PeopleInPlay;
};

type PeopleMenuDispatchProps = {
  togglePersonInPlay: (person: string) => any;
};

const mapDispatchToProps = (dispatch: any) => ({
  togglePersonInPlay: (person: string) => dispatch(togglePersonInPlay(person))
});

export type Props = PeopleMenuStateProps & PeopleMenuDispatchProps;

export default (Component: React.ComponentType<any>) =>
  connect(mapStateToProps, mapDispatchToProps)(Component);
