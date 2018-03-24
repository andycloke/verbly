import * as React from 'react';

import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';

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
  handleSubmitClick: (event: React.MouseEvent<HTMLElement>) => void;
};

const GameCard = ({
  tense,
  person,
  verb,
  handleUserAnswerChange,
  makeAnswerInputRef,
  englishInfinitive,
  userAnswer,
  displayConjugations,
  handleSubmitClick
}: Props) => (
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
      <TextField
        className="GameCard__input"
        id="answerInput"
        ref={makeAnswerInputRef}
        autoFocus
        fullWidth
        onChange={handleUserAnswerChange}
        value={userAnswer}
        disabled={displayConjugations}
      />
      <div className="GameCard__submitButtonCell">
        <SubmitButton onClick={handleSubmitClick} />
      </div>
    </div>
  </Paper>
);

export default GameCard;
