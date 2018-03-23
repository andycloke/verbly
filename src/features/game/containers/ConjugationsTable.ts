import { connect } from 'react-redux';

import { getConjugationsTableProps } from '../selectors';
import ConjugationsTable from '../components/ConjugationsTable';

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

export default connect(mapStateToProps)(ConjugationsTable);
