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
  showValues: boolean;
  head?: boolean;
  firstValue?: string;
  secondValue?: Value;
  thirdValue?: Value;
};

// TODO: display new high score
const ReviewRow = ({
  head,
  showValues,
  firstValue,
  secondValue,
  thirdValue
}: Props) => {
  const animatedSecondValue = (
    <ReviewRowFade show={showValues}>
      <span>{secondValue}</span>
    </ReviewRowFade>
  );
  const animatedThirdValue = (
    <ReviewRowFade show={showValues}>
      <span>{thirdValue}</span>
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
        <TableHeaderColumn style={topCellStyle}>
          {animatedThirdValue}
        </TableHeaderColumn>
      </>
    );
  }
  return (
    <TableRow selectable={false}>
      <TableRowColumn style={leftCellStyle} colSpan={LEFT_HAND_COL_SPAN}>
        {firstValue}
      </TableRowColumn>
      <TableRowColumn style={cellStyle}>{animatedSecondValue}</TableRowColumn>
      <TableRowColumn style={cellStyle}>{animatedThirdValue}</TableRowColumn>
    </TableRow>
  );
};

export default ReviewRow;
