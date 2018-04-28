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
const SHOW_NEXT_ROW_DELAY = 800;

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
        this.setState((prevState: State) => ({
          nRowsToShow: prevState.nRowsToShow + 1
        })),
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
      accuracyScore,
      timeTakenMultiplier,
      difficultyMultiplier,
      gameScore
    } = this.props;
    const { nRowsToShow } = this.state;

    return (
      <Card>
        <Table style={wrapperStyle}>
          <TableHeader
            style={tableStyle}
            adjustForCheckbox={false}
            displaySelectAll={false}
          >
            <ReviewRow head thirdValue="score" showValues />
          </TableHeader>
          <TableBody style={tableStyle} displayRowCheckbox={false}>
            <ReviewRow
              firstValue="Accuracy score"
              thirdValue={accuracyScore}
              showValues={nRowsToShow >= 1}
            />
            <ReviewRow
              firstValue="Speed multiplier"
              thirdValue={timeTakenMultiplier}
              showValues={nRowsToShow >= 2}
            />
            <ReviewRow
              firstValue="Difficulty multiplier"
              thirdValue={difficultyMultiplier.toFixed(2)}
              showValues={nRowsToShow >= 3}
            />
            <ReviewRow
              firstValue="Total Score"
              thirdValue={gameScore}
              showValues={nRowsToShow >= 4}
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
