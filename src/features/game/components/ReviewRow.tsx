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
  textAlign: 'center'
};

type Value = string | number;

type Props = {
  newHighScore?: boolean;
  fullWidth?: boolean;
  showValues: boolean;
  scoreTooltip?: boolean;
  firstValue?: string;
  secondValue?: Value;
};

const ReviewRow = ({
  scoreTooltip,
  fullWidth,
  showValues,
  firstValue,
  secondValue,
  newHighScore
}: Props) => (
  <TableRow selectable={false}>
    {!fullWidth && (
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
      colSpan={fullWidth ? 3 : 1}
      style={
        fullWidth
          ? newHighScore
            ? { ...highScoreCellStyle, color: '#bd4040' }
            : highScoreCellStyle
          : cellStyle
      }
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
