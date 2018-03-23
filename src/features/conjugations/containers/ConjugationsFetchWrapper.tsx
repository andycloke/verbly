import * as React from 'react';
import { connect } from 'react-redux';

import { getConjugationsFetched } from '../selectors';
import { fetchConjugationsIfNotFetched } from '../../conjugations/actions/fetch';

type StateProps = {
  fetched: boolean;
};

type DispatchProps = {
  fetchConjugationsIfNotFetched: () => void;
};

type Props = StateProps & DispatchProps;

const ConjugationsFetchWrapper = (
  Component: React.ComponentType,
  alwaysRenderChildren: boolean = false
) => {
  class ConjugationsFetchWrapperComponent extends React.PureComponent<Props> {
    async componentDidMount() {
      this.props.fetchConjugationsIfNotFetched();
    }
    render() {
      const { fetched } = this.props;
      return fetched || alwaysRenderChildren ? <Component /> : null;
    }
  }

  const mapStateToProps = (state: any): StateProps => ({
    fetched: getConjugationsFetched(state)
  });

  const mapDispatchToProps = (dispatch: any): DispatchProps => ({
    fetchConjugationsIfNotFetched: async () =>
      dispatch(fetchConjugationsIfNotFetched())
  });

  return connect(mapStateToProps, mapDispatchToProps)(
    ConjugationsFetchWrapperComponent as any
  );
};

export default ConjugationsFetchWrapper;
