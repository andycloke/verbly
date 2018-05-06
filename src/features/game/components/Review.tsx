import * as React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardActions } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import { Table, TableBody } from 'material-ui/Table';

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
const SHOW_NEXT_ROW_DELAY = 800;
const N_ROWS = 5;

type State = {
  nRowsToShow: number;
};

class Review extends React.PureComponent<Props, State> {
  state = {
    nRowsToShow: 0
  };

  rowInterval: NodeJS.Timer;

  componentDidMount() {
    this.rowInterval = setInterval(
      () =>
        this.setState(
          (prevState: State) => ({
            nRowsToShow: prevState.nRowsToShow + 1
          }),
          () => {
            if (this.state.nRowsToShow >= N_ROWS) {
              clearInterval(this.rowInterval);
            }
          }
        ),
      SHOW_NEXT_ROW_DELAY
    );
  }

  componentWillUnmount() {
    clearInterval(this.rowInterval);
  }

  handleStartGameClick = (e: React.MouseEvent<HTMLElement>): void => {
    this.props.resetGame();
    this.props.startGame();
  };

  handleEndGameClick = (e: React.MouseEvent<HTMLElement>): void => {
    this.props.resetGame();
  };

  render() {
    const {
      questionsCorrect,
      questionsAnswered,
      timeTaken,
      difficultyMultiplier,
      gameScore,
      highScore,
      newHighScore
    } = this.props;
    const { nRowsToShow } = this.state;

    return (
      <Card>
        <Table style={wrapperStyle}>
          <TableBody style={tableStyle} displayRowCheckbox={false}>
            <ReviewRow
              firstValue="Questions correct"
              secondValue={`${questionsCorrect} / ${questionsAnswered}`}
              showValues={nRowsToShow >= 1}
            />
            <ReviewRow
              firstValue="Time"
              secondValue={`${timeTaken / 1000}s`}
              showValues={nRowsToShow >= 2}
            />
            <ReviewRow
              firstValue="Difficulty"
              secondValue={difficultyMultiplier.toFixed(2)}
              showValues={nRowsToShow >= 3}
            />
            <ReviewRow
              scoreTooltip
              firstValue="Score"
              secondValue={gameScore}
              showValues={nRowsToShow >= 4}
            />
            <ReviewRow
              fullWidth
              secondValue={
                newHighScore
                  ? 'New High Score! 🔥'
                  : `Your high score: ${highScore}`
              }
              newHighScore={newHighScore}
              showValues={nRowsToShow >= 5}
            />
          </TableBody>
        </Table>
        <CardActions style={cardActionsStyle}>
          <Link to={pathToHome()}>
            <FlatButton onClick={this.handleEndGameClick} label="Quit" />
          </Link>
          <Link to={pathToGame()}>
            <FlatButton
              onClick={this.handleStartGameClick}
              label="Play Again"
            />
          </Link>
        </CardActions>
      </Card>
    );
  }
}

export default Review;
