import { accentedLettersMap } from '../../game/const';

// TODO: add Esc to quit game
export const KEYBOARD_SHORTCUTS = [
  {
    command: 'Start game / Submit answer',
    shortcut: 'Enter'
  },
  ...Object.entries(accentedLettersMap).map(([letter, accentedLetter]) => ({
    command: letter,
    shortcut: `Shift - ${accentedLetter.toUpperCase()}`
  }))
];
