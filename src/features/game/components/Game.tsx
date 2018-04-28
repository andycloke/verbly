import * as React from 'react';

import TextField from 'material-ui/TextField';

import { Props } from '../containers/Game';
import ConjugationsTable from '../containers/ConjugationsTable';
import AccentedLetterKey from './AccentedLetterKey';
import GameCard from './GameCard';
import {
  KeyboardKeys,
  keysLetterCanBeAccentedLetter,
  accentedLettersMap,
  DISPLAY_CORRECT_ICON_DURATION,
  INPUT_FUNCS_DELAY,
  AUDIO_OPTIONS
} from '../const';

import './Game.css';

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
      if (this.mounted) {
        this.setState({ shiftDown: true });
      }
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
      if (this.mounted) {
        this.setState({ shiftDown: false });
      }
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

  handleSubmitClick = (e: React.MouseEvent<HTMLElement>): void => {
    if (
      (!this.props.displayConjugations && this.props.userAnswerCorrect) ||
      this.props.displayConjugations
    ) {
      e.preventDefault();
    }
    this.submitAndFocus();
  };

  submitAndFocus = () => {
    if (this.props.userAnswerCorrect && !this.state.showCorrectIcon) {
      this.sayAnswer();
      if (this.mounted) {
        this.setState({ showCorrectIcon: true });
      }
      this.timeout = setTimeout(() => {
        this.props.submitAnswer();
        this.focusAnswerInput();
        if (this.mounted) {
          this.setState({ showCorrectIcon: false });
        }
      }, DISPLAY_CORRECT_ICON_DURATION);
    } else if (!this.props.displayConjugations) {
      this.sayAnswer();
      this.props.submitAnswer();
      this.blurAnswerInput();
    } else {
      this.props.newQuestion();
      this.focusAnswerInput();
    }
  };

  focusAnswerInput = () => {
    setTimeout(() => {
      if (this.mounted) this.answerInput.focus();
    }, INPUT_FUNCS_DELAY);
  };

  blurAnswerInput = () => {
    setTimeout(() => {
      if (this.mounted) this.answerInput.blur();
    }, INPUT_FUNCS_DELAY);
  };

  sayAnswer = () => {
    if (this.props.audioFeedback) {
      const { userAnswerCorrect, userAnswer, correctAnswer } = this.props;
      const msg = new SpeechSynthesisUtterance();
      msg.text = userAnswerCorrect ? userAnswer : correctAnswer;
      msg.rate = AUDIO_OPTIONS.RATE;
      msg.pitch = AUDIO_OPTIONS.PITCH;
      msg.lang = AUDIO_OPTIONS.LANG;
      speechSynthesis.speak(msg);
    }
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
    e: React.MouseEvent<HTMLElement>
  ) => {
    e.preventDefault();
    this.addAccentedLetterToUserAnswer(letter);
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
                onMouseDown={this.makeLetterButtonClickHandler(letter)}
              />
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default Game;
