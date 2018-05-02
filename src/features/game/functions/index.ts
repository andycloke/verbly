import { Tenses } from '../../../const/models/tenses';
import { People } from '../../../const/models/people';

export const tenseIsImperative = (tense: string): boolean =>
  tense === Tenses.ImperativeAffirmativePresent ||
  tense === Tenses.ImperativeNegativePresent;

export const personIsYo = (person: string): boolean => person === People.Yo;
