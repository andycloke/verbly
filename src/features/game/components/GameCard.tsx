import * as React from 'react';

import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';

import CheckIcon from 'material-ui/svg-icons/navigation/check';
import CrossIcon from 'material-ui/svg-icons/navigation/close';
import displayText from '../../../const/display-text/tenses';

import SubmitButton from './SubmitButton';

import './GameCard.css';

type Props = {
  tense: string;
  verb: string;
  person: string;
  handleUserAnswerChange: (e: any, newValue: string) => void;
  makeAnswerInputRef: (input: TextField) => void;
  englishInfinitive: string;
  userAnswer: string;
  displayConjugations: boolean;
  correct: boolean;
  incorrect: boolean;
  handleSubmitClick: (event: React.MouseEvent<HTMLElement>) => void;
};

const positiveGreen = '#52c952';
const negativeRed = '#c10e0e';

const GameCard = ({
  tense,
  person,
  verb,
  handleUserAnswerChange,
  makeAnswerInputRef,
  englishInfinitive,
  userAnswer,
  displayConjugations,
  correct,
  incorrect,
  handleSubmitClick
}: Props) => {
  const underlineStyle: { borderBottom?: string } = {};
  const inputStyle: { color?: string; paddingRight: string } = {
    paddingRight: '27px'
  };
  let icon = null;
  if (correct) {
    underlineStyle.borderBottom = `2px solid ${positiveGreen}`;
    inputStyle.color = positiveGreen;
    icon = <CheckIcon color={positiveGreen} />;
  } else if (incorrect) {
    underlineStyle.borderBottom = `2px solid ${negativeRed}`;
    inputStyle.color = negativeRed;
    icon = <CrossIcon color={negativeRed} />;
  }
  return (
    <Paper style={{ width: '100%' }}>
      <div className="GameCard__wrapper">
        <span className="GameCard__innerText--border">Tense</span>
        <span className="GameCard__innerText--border GameCard__innerText--leftAlign GameCard__tense">
          {tense ? displayText[tense].text : ''}
        </span>
        <span className="GameCard__innerText--border">Verb</span>
        <span className="GameCard__innerText--border GameCard__innerText--leftAlign GameCard__verb">
          {`${verb} ${englishInfinitive ? `- ${englishInfinitive}` : ''}`}
        </span>
        <span className="GameCard__person">{person}</span>
        <div className="GameCard__inputCell">
          <div className="GameCard__input">
            <TextField
              id="answerInput"
              ref={makeAnswerInputRef}
              autoFocus
              fullWidth
              onChange={handleUserAnswerChange}
              value={userAnswer}
              disabled={displayConjugations}
              underlineStyle={underlineStyle}
              inputStyle={inputStyle}
            />
          </div>
          <div className="GameCard__inputIconContainer">{icon}</div>
        </div>
        <div className="GameCard__submitButtonCell">
          <SubmitButton onClick={handleSubmitClick} />
        </div>
      </div>
    </Paper>
  );
};

export default GameCard;
