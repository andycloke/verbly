import * as React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardActions } from 'material-ui/Card';
import { List, ListItem } from 'material-ui/List';
import FlatButton from 'material-ui/FlatButton';

import { pathToGame, pathToHome } from '../../../paths';
import { Props } from '../containers/Review';

import './Review.css';

const Review = ({
  percentageCorrect,
  gameDuration,
  difficultyFactor,
  startGame,
  resetGame
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
      <List>
        <ListItem
          primaryText="Accuracy"
          rightIcon={
            <span className="Review__statText">{percentageCorrect}%</span>
          }
        />
        <ListItem
          primaryText="Time taken"
          rightIcon={
            <span className="Review__statText">{gameDuration / 1000}s</span>
          }
        />
        <ListItem
          primaryText="Difficulty factor"
          rightIcon={
            <span className="Review__statText">
              {difficultyFactor.toFixed(2)}
            </span>
          }
        />
      </List>
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
