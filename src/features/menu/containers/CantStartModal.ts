import { connect } from 'react-redux';

import CantStartModal from '../components/CantStartModal';
import { getCantStartModalProps } from '../selectors';

export type StateProps = {
  missingItems: string[];
};

export type OwnProps = {
  open: boolean;
  closeModal: () => void;
};

export type AllDataProps = StateProps & OwnProps;

const mapStateToProps = (
  state: any,
  { open, closeModal }: OwnProps
): AllDataProps => ({
  ...getCantStartModalProps(state),
  open,
  closeModal
});

export default connect(mapStateToProps)(CantStartModal);
