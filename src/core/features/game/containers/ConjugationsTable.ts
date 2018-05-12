import * as React from 'react';
import { connect } from 'react-redux';
import { getConjugationsTableProps } from '../selectors';

export type ConjugationDisplayPair = {
  person: string;
  conjugation: string;
  highlight: boolean;
};

export type StateProps = {
  conjugations: ConjugationDisplayPair[];
};

const mapStateToProps = (state: any): StateProps =>
  getConjugationsTableProps(state);

export default (Component: React.ComponentType<any>) =>
  connect(mapStateToProps)(Component);
