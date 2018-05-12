import { ACCENTED_LETTER_MAP } from '../../../core/features/game/constants';

export const KEYBOARD_SHORTCUTS = [
  ...Object.entries(ACCENTED_LETTER_MAP).map(([letter, accentedLetter]) => ({
    command: letter,
    shortcut: `Shift - ${accentedLetter.toUpperCase()}`
  })),
  {
    command: 'Start game / Submit answer',
    shortcut: 'Enter'
  },
  {
    command: 'Quit game',
    shortcut: 'Esc'
  }
];
