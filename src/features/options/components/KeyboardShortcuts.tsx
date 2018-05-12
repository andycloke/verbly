import * as React from 'react';
import { Table, TableBody, TableRow, TableRowColumn } from 'material-ui/Table';
import { KEYBOARD_SHORTCUTS } from '../constants';

type ShortcutRowProps = {
  command: string;
  shortcut: string;
};

const ShortcutRow = ({ command, shortcut }: ShortcutRowProps) => (
  <TableRow selectable={false}>
    <TableRowColumn>{command}</TableRowColumn>
    <TableRowColumn>{shortcut}</TableRowColumn>
  </TableRow>
);

const KeyboardShortcuts = () => (
  <Table>
    <TableBody displayRowCheckbox={false}>
      {KEYBOARD_SHORTCUTS.map(({ command, shortcut }) => (
        <ShortcutRow key={command} command={command} shortcut={shortcut} />
      ))}
    </TableBody>
  </Table>
);

export default KeyboardShortcuts;
