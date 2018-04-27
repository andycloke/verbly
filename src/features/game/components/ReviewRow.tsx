import * as React from 'react';
import { TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';

type Value = string | number;

type Props = {
  head?: boolean;
  firstValue?: string;
  secondValue?: Value;
  thirdValue?: Value;
};

const LEFT_HAND_COL_SPAN = 2;
const CELL_PADDING = 8;
const LEFT_CELL_PADDING = 10;
const cellStyle = {
  paddingLeft: CELL_PADDING,
  paddingRight: CELL_PADDING
};

const leftCellStyle = {
  ...cellStyle,
  paddingLeft: LEFT_CELL_PADDING,
  paddingRight: LEFT_CELL_PADDING
};

// TODO: scss, display new high score + animations!
// TODO: top cell height reduce
const ReviewRow = ({ head, firstValue, secondValue, thirdValue }: Props) =>
  head ? (
    <>
      <TableHeaderColumn style={leftCellStyle} colSpan={LEFT_HAND_COL_SPAN}>
        {firstValue}
      </TableHeaderColumn>
      <TableHeaderColumn style={cellStyle}>{secondValue}</TableHeaderColumn>
      <TableHeaderColumn style={cellStyle}>{thirdValue}</TableHeaderColumn>
    </>
  ) : (
    <TableRow selectable={false}>
      <TableRowColumn style={leftCellStyle} colSpan={LEFT_HAND_COL_SPAN}>
        {firstValue}
      </TableRowColumn>
      <TableRowColumn style={cellStyle}>{secondValue}</TableRowColumn>
      <TableRowColumn style={cellStyle}>{thirdValue}</TableRowColumn>
    </TableRow>
  );

export default ReviewRow;
