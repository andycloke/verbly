import * as React from 'react';

import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentSend from 'material-ui/svg-icons/content/send';

import { StateProps, DispatchProps } from '../containers/Game';

import './Game.css';

class Game extends React.PureComponent<StateProps & DispatchProps> {
  render() {
    return (
      <div className="Game__outer">
        <Paper>
          <div className="Game__inner">
            <span className="Game__innerText--border">Tense</span>
            <span className="Game__innerText--border Game__innerText--leftAlign Game__tense">
              Present
            </span>
            <span className="Game__innerText--border">Verb</span>
            <span className="Game__innerText--border Game__innerText--leftAlign Game__verb">
              Correr - to run
            </span>
            <span className="Game__person">Tu</span>
            <TextField className="Game__input" id="text-field-default" />
            <div className="Game__submitButtonCell">
              <FloatingActionButton
                secondary
                mini
                className="Game__submitButton"
              >
                <ContentSend />
              </FloatingActionButton>
            </div>
          </div>
        </Paper>
      </div>
    );
  }
}

export default Game;
