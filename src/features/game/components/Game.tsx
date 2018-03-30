import * as React from 'react';

import TextField from 'material-ui/TextField';

import { Props } from '../containers/Game';
import ConjugationsTable from '../containers/ConjugationsTable';
import AccentedLetterKey from './AccentedLetterKey';
import GameCard from './GameCard';

import './Game.css';

const accentedLettersMap = {
  a: 'á',
  e: 'é',
  i: 'í',
  n: 'ñ',
  o: 'ó',
  u: 'ú'
};
const ACCENTED_LETTER_KEYS = [...Object.keys(accentedLettersMap)];
enum KeyboardKeys {
  Shift = 'Shift',
  Enter = 'Enter'
}

const keysLetterCanBeAccentedLetter = (key: string): boolean =>
  ACCENTED_LETTER_KEYS.includes(key) ||
  ACCENTED_LETTER_KEYS.includes(key.toLowerCase());

const DISPLAY_CORRECT_ICON_DURATION = 330;
// for some reason need to delay calling of input functions e.g. focus
// to get them to work. This delay time seems to work okay.
const INPUT_FUNCS_DELAY = 100;

type State = {
  shiftDown: boolean;
  showCorrectIcon: boolean;
};

class Game extends React.PureComponent<Props, State> {
  answerInput: TextField;
  answerInputHTML: HTMLInputElement;
  mounted: boolean;
  timeout: NodeJS.Timer;

  state = {
    shiftDown: false,
    showCorrectIcon: false
  };

  componentDidMount() {
    this.props.initialiseGame();
    window.addEventListener('keydown', this.handleKeyDown);
    window.addEventListener('keyup', this.handleKeyUp);
    this.mounted = true;
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
    window.removeEventListener('keyup', this.handleKeyUp);
    clearTimeout(this.timeout);
    this.mounted = false;
  }

  handleKeyDown = (e: KeyboardEvent) => {
    const { key } = e;
    if (key === KeyboardKeys.Enter) {
      this.submitAndFocus();
      return;
    }
    if (key === KeyboardKeys.Shift) {
      this.setState({ shiftDown: true });
      return;
    }
    if (keysLetterCanBeAccentedLetter(key) && this.state.shiftDown) {
      e.preventDefault();
      this.addAccentedLetterToUserAnswer(accentedLettersMap[key.toLowerCase()]);
      return;
    }
  };

  handleKeyUp = (e: KeyboardEvent) => {
    if (e.key === KeyboardKeys.Shift) {
      this.setState({ shiftDown: false });
    }
  };

  makeAnswerInputRef = (input: TextField): void => {
    this.answerInput = input;
    if (this.answerInput) {
      this.answerInputHTML = this.answerInput.getInputNode();
      this.answerInputHTML.setAttribute('autocapitalize', 'off');
      this.answerInputHTML.setAttribute('autocorrect', 'off');
      this.answerInputHTML.setAttribute('autocomplete', 'off');
    }
  };

  handleUserAnswerChange = (
    e: any, // React.FormEvent<HTMLInputElement> but this doesnt have selectionStart :/
    newValue: string
  ): void => {
    this.props.updateUserAnswer(newValue);
  };

  handleSubmitClick = (event: React.MouseEvent<HTMLElement>): void => {
    this.submitAndFocus();
  };

  submitAndFocus = () => {
    if (this.props.userAnswerCorrect && !this.state.showCorrectIcon) {
      this.setState({ showCorrectIcon: true });
      this.timeout = setTimeout(() => {
        this.props.submit();
        this.focusAnswerInput();
        this.setState({ showCorrectIcon: false });
      }, DISPLAY_CORRECT_ICON_DURATION);
    } else {
      this.props.submit();
      this.focusAnswerInput();
    }
  };

  focusAnswerInput = () => {
    setTimeout(() => {
      if (this.mounted) this.answerInput.focus();
    }, INPUT_FUNCS_DELAY);
  };

  addAccentedLetterToUserAnswer = (letter: string) => {
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
    }, INPUT_FUNCS_DELAY);
  };

  makeLetterButtonClickHandler = (letter: string) => (
    event: React.MouseEvent<HTMLElement>
  ) => this.addAccentedLetterToUserAnswer(letter);

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
        <GameCard
          correct={this.state.showCorrectIcon}
          incorrect={displayConjugations}
          tense={tense}
          person={person}
          verb={verb}
          handleUserAnswerChange={this.handleUserAnswerChange}
          makeAnswerInputRef={this.makeAnswerInputRef}
          englishInfinitive={englishInfinitive}
          userAnswer={userAnswer}
          disabled={displayConjugations}
          handleSubmitClick={this.handleSubmitClick}
        />
        {displayConjugations ? (
          <ConjugationsTable />
        ) : (
          <div className="Game__accentedLetters">
            {Object.values(accentedLettersMap).map((letter: string) => (
              <AccentedLetterKey
                key={letter}
                letter={letter}
                onClick={this.makeLetterButtonClickHandler(letter)}
              />
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default Game;
