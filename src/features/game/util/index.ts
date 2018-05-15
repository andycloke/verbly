import { ACCENTED_LETTER_KEYS } from '../../../core/features/game/constants';

export const keyLetterCanBeAccentedLetter = (key: string): boolean =>
  ACCENTED_LETTER_KEYS.includes(key) ||
  ACCENTED_LETTER_KEYS.includes(key.toLowerCase());
