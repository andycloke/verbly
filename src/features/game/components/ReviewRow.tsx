import * as React from 'react';
import { TableRow, TableRowColumn } from 'material-ui/Table';

type Value = string | number;

type Props = {
  label: string;
  leftValue?: Value;
  rightValue?: Value;
};

const numberCellPadding = '17px';

const numberCellStyle = {
  paddingLeft: numberCellPadding,
  paddingRight: numberCellPadding
};

// TODO: display new high score + animations!
const ReviewRow = ({ label, leftValue, rightValue }: Props) => (
  <TableRow selectable={false}>
    <TableRowColumn style={{ width: '145px' }}>{label}</TableRowColumn>
    <TableRowColumn style={numberCellStyle}>{leftValue}</TableRowColumn>
    <TableRowColumn style={numberCellStyle}>{rightValue}</TableRowColumn>
  </TableRow>
);

export default ReviewRow;
