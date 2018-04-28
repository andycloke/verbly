import * as React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardActions } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import { Table, TableHeader, TableBody } from 'material-ui/Table';

import { pathToGame, pathToHome } from '../../../paths';
import { Props } from '../containers/Review';
import ReviewRow from './ReviewRow';

const wrapperStyle = { maxWidth: '500px', margin: '0 auto' };
const cardActionsStyle = {
  display: 'flex',
  justifyContent: 'center' as 'center'
};
const tableStyle = {
  borderLeft: '1px solid rgb(224, 224, 224)',
  borderRight: '1px solid rgb(224, 224, 224)'
};

const Review = ({
  percentageCorrect,
  accuracyScore,
  timeTaken,
  timeTakenScore,
  difficultyFactor,
  startGame,
  resetGame,
  gameScore
}: Props) => {
  const handleStartGameClick = (e: React.MouseEvent<HTMLElement>): void => {
    resetGame();
    startGame();
  };
  const handleEndGameClick = (e: React.MouseEvent<HTMLElement>): void => {
    resetGame();
  };
  return (
    <Card>
      <Table style={wrapperStyle}>
        <TableHeader
          style={tableStyle}
          adjustForCheckbox={false}
          displaySelectAll={false}
        >
          <ReviewRow head thirdValue="score" />
        </TableHeader>
        <TableBody style={tableStyle} displayRowCheckbox={false}>
          <ReviewRow
            firstValue="Answers correct"
            secondValue={`${percentageCorrect}%`}
            thirdValue={accuracyScore}
          />
          <ReviewRow
            firstValue="Time taken"
            secondValue={`${timeTaken / 1000}s`}
            thirdValue={timeTakenScore}
          />
          <ReviewRow
            firstValue="Total Score"
            thirdValue={accuracyScore + timeTakenScore}
          />
          <ReviewRow
            firstValue="Difficulty factor"
            secondValue={difficultyFactor.toFixed(2)}
          />
          <ReviewRow firstValue="Score" thirdValue={gameScore} />
        </TableBody>
      </Table>
      <CardActions style={cardActionsStyle}>
        <Link to={pathToHome()}>
          <FlatButton onClick={handleEndGameClick} label="Quit" />
        </Link>
        <Link to={pathToGame()}>
          <FlatButton onClick={handleStartGameClick} label="Play Again" />
        </Link>
      </CardActions>
    </Card>
  );
};

export default Review;
