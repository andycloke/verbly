import * as React from 'react';

import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentSend from 'material-ui/svg-icons/content/send';

import { StateProps, DispatchProps } from '../containers/Game';
import displayText from '../../../const/display-text/tenses';

import './Game.css';

class Game extends React.PureComponent<StateProps & DispatchProps> {
  componentDidMount() {
    this.props.initialiseGame();
  }

  handleUserAnswerChange = (e: React.FormEvent<{}>, newValue: string) => {
    this.props.updateUserAnswer(newValue);
  };

  render() {
    const { tense, person, verb, englishInfinitive, userAnswer } = this.props;
    return (
      <div className="Game__outer">
        <Paper>
          <div className="Game__inner">
            <span className="Game__innerText--border">Tense</span>
            <span className="Game__innerText--border Game__innerText--leftAlign Game__tense">
              {tense ? displayText[tense].text : ''}
            </span>
            <span className="Game__innerText--border">Verb</span>
            <span className="Game__innerText--border Game__innerText--leftAlign Game__verb">
              {`${verb} ${englishInfinitive ? `- ${englishInfinitive}` : ''}`}
            </span>
            <span className="Game__person">{person}</span>
            <TextField
              className="Game__input"
              id="answerInput"
              onChange={this.handleUserAnswerChange}
              value={userAnswer}
            />
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
