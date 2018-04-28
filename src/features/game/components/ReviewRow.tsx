import * as React from 'react';
import { TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';
import ReviewRowFade from './ReviewRowFade';

const LEFT_HAND_COL_SPAN = 2;
const CELL_PADDING = 8;
const LEFT_CELL_PADDING = 10;
const cellStyle = {
  fontSize: 14,
  paddingLeft: CELL_PADDING,
  paddingRight: CELL_PADDING
};
const highScoreCellStyle = {
  ...cellStyle,
  textAlign: 'center',
  color: '#bd4040'
};
const topCellStyle = {
  ...cellStyle,
  fontSize: 13,
  height: 35
};
const leftCellStyle = {
  ...cellStyle,
  paddingLeft: LEFT_CELL_PADDING,
  paddingRight: LEFT_CELL_PADDING
};
const leftTopCellStyle = {
  ...topCellStyle,
  ...leftCellStyle
};

type Value = string | number;

type Props = {
  newHighScore?: boolean;
  showValues: boolean;
  head?: boolean;
  firstValue?: string;
  secondValue?: Value;
};

const ReviewRow = ({
  head,
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
  if (head) {
    return (
      <>
        <TableHeaderColumn
          style={leftTopCellStyle}
          colSpan={LEFT_HAND_COL_SPAN}
        >
          {firstValue}
        </TableHeaderColumn>
        <TableHeaderColumn style={topCellStyle}>
          {animatedSecondValue}
        </TableHeaderColumn>
      </>
    );
  }
  return (
    <TableRow selectable={false}>
      {!newHighScore && (
        <TableRowColumn style={leftCellStyle} colSpan={LEFT_HAND_COL_SPAN}>
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
