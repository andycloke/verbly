import * as React from 'react';
import { Table, TableBody, TableRow, TableRowColumn } from 'material-ui/Table';
import { accentedLettersMap } from '../../game/const';

type ShortcutRowProps = {
  letter: string;
  shortcut: string;
};

const ShortcutRow = ({ letter, shortcut }: ShortcutRowProps) => (
  <TableRow selectable={false}>
    <TableRowColumn>{letter}</TableRowColumn>
    <TableRowColumn>{shortcut}</TableRowColumn>
  </TableRow>
);

const KeyboardShortcuts = () => (
  <Table>
    <TableBody displayRowCheckbox={false}>
      {Object.entries(accentedLettersMap).map(([letter, accentedLetter]) => (
        <ShortcutRow
          letter={letter.toUpperCase()}
          shortcut={`Shift - ${accentedLetter.toUpperCase()}`}
        />
      ))}
    </TableBody>
  </Table>
);

export default KeyboardShortcuts;
