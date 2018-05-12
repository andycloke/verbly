import { Tenses } from '../constants/tenses';
import { People } from '../constants/people';

export function shuffle<T>(a: T[]): T[] {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export function randomElement<T>(a: T[]): T {
  return a[Math.floor(Math.random() * a.length)];
}

export const tenseIsImperative = (tense: string): boolean =>
  tense === Tenses.ImperativeAffirmativePresent ||
  tense === Tenses.ImperativeNegativePresent;

export const personIsYo = (person: string): boolean => person === People.Yo;
