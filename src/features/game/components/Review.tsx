import * as React from 'react';
import Paper from 'material-ui/Paper';
import { List, ListItem } from 'material-ui/List';
import { Props } from '../containers/Review';

const Review = ({ questionsCorrect, questionsAnswered }: Props) => {
  return (
    <Paper style={{ width: '100%' }}>
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
    </Paper>
  );
};

export default Review;
