import * as React from 'react';
import { connect } from 'react-redux';

import { getCantStartModalProps } from '../selectors';

export type StateProps = {
  missingItems: string[];
};

export type OwnProps = {
  open: boolean;
  closeModal: () => void;
};

export type Props = StateProps & OwnProps;

const mapStateToProps = (
  state: any,
  { open, closeModal }: OwnProps
): Props => ({
  ...getCantStartModalProps(state),
  open,
  closeModal
});

export default (Component: React.ComponentType<any>) =>
  connect(mapStateToProps)(Component);
