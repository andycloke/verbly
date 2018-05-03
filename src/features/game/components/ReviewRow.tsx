import * as React from 'react';
import { TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';
import ReviewRowFade from './ReviewRowFade';
import QuestionMarkIcon from './QuestionMarkIcon';

import './ReviewRow.css';

const LEFT_HAND_COL_SPAN = 2;
const CELL_PADDING = 10;
const cellStyle = {
  fontSize: 14,
  paddingLeft: CELL_PADDING,
  paddingRight: CELL_PADDING,
  color: 'rgba(0, 0, 0, 0.87)',
  height: 48,
  borderBottom: '1px solid rgb(224, 224, 224)'
};
const highScoreCellStyle = {
  ...cellStyle,
  textAlign: 'center',
  color: '#bd4040'
};

type Value = string | number;

type Props = {
  newHighScore?: boolean;
  showValues: boolean;
  scoreTooltip?: boolean;
  firstValue?: string;
  secondValue?: Value;
};

const ReviewRow = ({
  scoreTooltip,
  newHighScore,
  showValues,
  firstValue,
  secondValue
}: Props) => {
  const animatedSecondValue = (
    <ReviewRowFade show={showValues}>
      <span>{secondValue}</span>
    </ReviewRowFade>
  );
  if (scoreTooltip) {
    return (
      <>
        <TableHeaderColumn
          style={cellStyle}
          colSpan={LEFT_HAND_COL_SPAN}
          tooltip="100 + 0.48 x % Answers Correct x (15 - time) x Difficulty"
        >
          <div className="ReviewRow__scoreLabelCell">
            {firstValue}
            <QuestionMarkIcon />
          </div>
        </TableHeaderColumn>
        <TableHeaderColumn style={cellStyle}>
          {animatedSecondValue}
        </TableHeaderColumn>
      </>
    );
  }
  return (
    <TableRow selectable={false}>
      {!newHighScore && (
        <TableRowColumn style={cellStyle} colSpan={LEFT_HAND_COL_SPAN}>
          {firstValue}
        </TableRowColumn>
      )}
      <TableRowColumn
        colSpan={newHighScore ? 3 : 1}
        style={newHighScore ? highScoreCellStyle : cellStyle}
      >
        {animatedSecondValue}
      </TableRowColumn>
    </TableRow>
  );
};

export default ReviewRow;
