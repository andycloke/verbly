import * as React from 'react';
import { TableRow, TableRowColumn } from 'material-ui/Table';
import ReviewRowFade from './ReviewRowFade';
import QuestionMarkTooltip from './QuestionMarkTooltip';

import './ReviewRow.css';

const LEFT_HAND_COL_SPAN = 2;
const CELL_PADDING = 10;
const cellStyle = {
  fontSize: 14,
  paddingLeft: CELL_PADDING,
  paddingRight: CELL_PADDING,
  overflow: 'visible' as 'visible'
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
}: Props) => (
  <TableRow selectable={false}>
    {!newHighScore && (
      <TableRowColumn style={cellStyle} colSpan={LEFT_HAND_COL_SPAN}>
        {scoreTooltip ? (
          <div className="ReviewRow__scoreLabelCell">
            {firstValue}
            <QuestionMarkTooltip />
          </div>
        ) : (
          firstValue
        )}
      </TableRowColumn>
    )}
    <TableRowColumn
      colSpan={newHighScore ? 3 : 1}
      style={newHighScore ? highScoreCellStyle : cellStyle}
    >
      {
        <ReviewRowFade show={showValues}>
          <span>{secondValue}</span>
        </ReviewRowFade>
      }
    </TableRowColumn>
  </TableRow>
);

export default ReviewRow;
