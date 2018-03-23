import * as React from 'react';

import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentSend from 'material-ui/svg-icons/content/send';

import { StateProps, DispatchProps } from '../containers/Game';
import ConjugationsTable from '../containers/ConjugationsTable';
import displayText from '../../../const/display-text/tenses';

import './Game.css';

class Game extends React.PureComponent<StateProps & DispatchProps> {
  answerInput: TextField;
  mounted: boolean;

  componentDidMount() {
    this.props.initialiseGame();
    window.addEventListener('keydown', this.handleKeyDown);
    this.mounted = true;
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
    this.mounted = false;
  }

  handleKeyDown = (e: KeyboardEvent) => {
    const { key } = e;
    if (key === 'Enter') {
      this.submitAndFocus();
    }
  };

  makeAnswerInputRef = (input: TextField) => {
    this.answerInput = input;
  };

  handleUserAnswerChange = (e: React.FormEvent<{}>, newValue: string) => {
    this.props.updateUserAnswer(newValue);
  };

  handleSubmitClick = (event: React.MouseEvent<HTMLElement>) => {
    this.submitAndFocus();
  };

  submitAndFocus = () => {
    this.props.submit();
    setTimeout(() => {
      if (this.mounted) this.answerInput.focus();
    }, 100);
  };

  render() {
    const {
      tense,
      person,
      verb,
      englishInfinitive,
      userAnswer,
      displayConjugations
    } = this.props;
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
              ref={this.makeAnswerInputRef}
              autoFocus
              fullWidth
              onChange={this.handleUserAnswerChange}
              value={userAnswer}
              disabled={displayConjugations}
            />
            <div className="Game__submitButtonCell">
              <FloatingActionButton
                secondary
                mini
                className="Game__submitButton"
                onMouseDown={this.handleSubmitClick}
              >
                <ContentSend />
              </FloatingActionButton>
            </div>
          </div>
        </Paper>
        {displayConjugations ? (
          <div className="Game__conjugationsContainer">
            <ConjugationsTable />
          </div>
        ) : null}
      </div>
    );
  }
}

export default Game;
