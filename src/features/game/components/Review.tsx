import * as React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardActions } from 'material-ui/Card';
import { List, ListItem } from 'material-ui/List';
import FlatButton from 'material-ui/FlatButton';

import { pathToGame, pathToHome } from '../../../paths';
import { Props } from '../containers/Review';

const Review = ({
  questionsCorrect,
  questionsAnswered,
  startGame,
  endGame
}: Props) => {
  const handleStartGameClick = (e: React.MouseEvent<HTMLElement>): void => {
    endGame();
    startGame();
  };
  const handleEndGameClick = (e: React.MouseEvent<HTMLElement>): void => {
    endGame();
  };
  return (
    <Card style={{ width: '100%' }}>
      <List>
        <ListItem
          primaryText="Questions Answered"
          rightIcon={<span>{questionsAnswered}</span>}
        />
        <ListItem
          primaryText="Questions Correct"
          rightIcon={<span>{questionsCorrect}</span>}
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
