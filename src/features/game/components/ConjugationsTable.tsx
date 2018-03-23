import * as React from 'react';
import * as classNames from 'classnames';
import Paper from 'material-ui/Paper';

import { StateProps } from '../containers/ConjugationsTable';

import './ConjugationsTable.css';

class ConjugationsTable extends React.PureComponent<StateProps> {
  render() {
    return (
      <Paper>
        <div className="ConjugationsTable__outer">
          {this.props.conjugations.map(({ person, conjugation, highlight }) => (
            <div
              key={person}
              className={classNames('ConjugationsTable__row', {
                'ConjugationsTable__row--highlight': highlight
              })}
            >
              <div className="ConjugationsTable__personContainer">
                <div className="ConjugationsTable__person">{person}</div>
              </div>
              <div className="ConjugationsTable__conjugationContainer">
                {conjugation}
              </div>
            </div>
          ))}
        </div>
      </Paper>
    );
  }
}

export default ConjugationsTable;
