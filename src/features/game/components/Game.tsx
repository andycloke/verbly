import * as React from 'react';

import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import RaisedButton from 'material-ui/RaisedButton';
import ContentSend from 'material-ui/svg-icons/content/send';

import { StateProps, DispatchProps } from '../containers/Game';
import ConjugationsTable from '../containers/ConjugationsTable';
import displayText from '../../../const/display-text/tenses';

import './Game.css';

const accentedLetters = ['á', 'é', 'í', 'ñ', 'ó', 'ú'];
const letterButtonStyle = {
  minWidth: '50px',
  margin: '0 5px'
};

// for some reason need to delay calling of input functions e.g. focus
// to get them to work
const inputFuncsDelay = 100;

class Game extends React.PureComponent<StateProps & DispatchProps> {
  answerInput: TextField;
  answerInputHTML: HTMLInputElement;
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
    this.answerInputHTML = this.answerInput.getInputNode();
  };

  handleUserAnswerChange = (
    e: any, // React.FormEvent<HTMLInputElement> but this doesnt have selectionStart :/
    newValue: string
  ) => {
    // const { selectionStart } = e.target;
    // this.setState({ selectionStart });
    this.props.updateUserAnswer(newValue);
  };

  handleSubmitClick = (event: React.MouseEvent<HTMLElement>) => {
    this.submitAndFocus();
  };

  submitAndFocus = () => {
    this.props.submit();
    this.focusAnswerInput();
  };

  focusAnswerInput = () => {
    setTimeout(() => {
      if (this.mounted) this.answerInput.focus();
    }, inputFuncsDelay);
  };

  makeLetterButtonClickHandler = (letter: string) => (
    event: React.MouseEvent<HTMLElement>
  ) => {
    const { selectionStart, selectionEnd } = this.answerInputHTML;
    const { userAnswer, updateUserAnswer } = this.props;
    updateUserAnswer(
      userAnswer.slice(0, selectionStart) +
        letter +
        userAnswer.slice(selectionEnd)
    );
    this.focusAnswerInput();
    setTimeout(() => {
      if (this.mounted) {
        this.answerInputHTML.setSelectionRange(
          selectionStart + 1,
          selectionStart + 1
        );
      }
    }, inputFuncsDelay);
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
        <Paper style={{ width: '100%' }}>
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
        ) : (
          <div className="Game__accentedLetters">
            {accentedLetters.map((letter: string) => (
              <RaisedButton
                key={letter}
                label={letter}
                onMouseDown={this.makeLetterButtonClickHandler(letter)}
                primary
                style={letterButtonStyle}
              />
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default Game;
