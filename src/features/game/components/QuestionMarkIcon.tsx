import * as React from 'react';
import IconButton from 'material-ui/IconButton';
import QuestionMark from 'material-ui/svg-icons/action/help';

const QuestionMarkIcon = () => (
  <IconButton
    style={{ padding: 0, width: 30, height: 30 }}
    iconStyle={{ width: 20, color: '#ccc' }}
  >
    <QuestionMark />
  </IconButton>
);

export default QuestionMarkIcon;
