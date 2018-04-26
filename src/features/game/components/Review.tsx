import * as React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardActions } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import {
  Table,
  TableHeader,
  TableHeaderColumn,
  TableBody
} from 'material-ui/Table';

import { pathToGame, pathToHome } from '../../../paths';
import { Props } from '../containers/Review';
import ReviewRow from './ReviewRow';

const tableHeaderCellStyle = {
  height: '44px'
};

const scoreCellStyle = {
  ...tableHeaderCellStyle,
  textAlign: 'center'
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
    <Card style={{ width: '100%' }}>
      <Table>
        <TableHeader adjustForCheckbox={false} displaySelectAll={false}>
          <TableHeaderColumn style={tableHeaderCellStyle} />
          <TableHeaderColumn style={tableHeaderCellStyle} />
          <TableHeaderColumn style={scoreCellStyle}>Score</TableHeaderColumn>
        </TableHeader>
        <TableBody displayRowCheckbox={false}>
          <ReviewRow
            label="Answers correct"
            leftValue={`${percentageCorrect}%`}
            rightValue={accuracyScore}
          />
          <ReviewRow
            label="Time taken"
            leftValue={`${timeTaken / 1000}s`}
            rightValue={timeTakenScore}
          />
          <ReviewRow
            label="Difficulty factor"
            leftValue={difficultyFactor.toFixed(2)}
          />
          <ReviewRow label="Score" rightValue={gameScore} />
        </TableBody>
      </Table>
      <CardActions>
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
