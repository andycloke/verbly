// Game Play
export const N_GAME_VERB_TENSES = 10; // max number of different verbs tested in a game
export const MAX_FRACTION_OF_OLD_VERBS = 0.6;
export const CORRECT_ANSWERS_TARGET = 10;

export const accentedLettersMap = {
  a: 'á',
  e: 'é',
  i: 'í',
  n: 'ñ',
  o: 'ó',
  u: 'ú'
};
export const ACCENTED_LETTER_KEYS = [...Object.keys(accentedLettersMap)];
export const keysLetterCanBeAccentedLetter = (key: string): boolean =>
  ACCENTED_LETTER_KEYS.includes(key) ||
  ACCENTED_LETTER_KEYS.includes(key.toLowerCase());

export enum KeyboardKeys {
  Shift = 'Shift',
  Enter = 'Enter'
}
export const DISPLAY_CORRECT_ICON_DURATION = 330;
// for some reason need to delay calling of input functions e.g. focus
// to get them to work. This delay time seems to work okay.
export const INPUT_FUNCS_DELAY = 100;
