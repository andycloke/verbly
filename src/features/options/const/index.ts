import { accentedLettersMap } from '../../game/const';

export const KEYBOARD_SHORTCUTS = [
  ...Object.entries(accentedLettersMap).map(([letter, accentedLetter]) => ({
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
