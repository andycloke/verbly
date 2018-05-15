import { VerbEndingOptions } from './endings';
import { Tenses } from '../../../../../constants/tenses';
import { People } from '../../../../../constants/people';

type SingleTenseConjugations = {
  [People.Yo]: Array<string>;
  [People.Tu]: Array<string>;
  [People.El]: Array<string>;
  [People.Nosotros]: Array<string>;
  [People.Vosotros]: Array<string>;
  [People.Ellos]: Array<string>;
};

export type Conjugation = {
  verb: string;
  englishInfinitive: string;
  irregular: boolean;
  type: string;
  common: boolean;
  reflexive: boolean;
  ending: VerbEndingOptions;
  [Tenses.IndicativePresent]: SingleTenseConjugations;
  [Tenses.IndicativePreterite]: SingleTenseConjugations;
  [Tenses.IndicativeFuture]: SingleTenseConjugations;
  [Tenses.ConditionalPresent]: SingleTenseConjugations;
  [Tenses.IndicativeImperfect]: SingleTenseConjugations;
  [Tenses.IndicativePresentProgressive]: SingleTenseConjugations;
  [Tenses.IndicativePresentPerfect]: SingleTenseConjugations;
  [Tenses.IndicativePastPerfect]: SingleTenseConjugations;
  [Tenses.IndicativeFuturePerfect]: SingleTenseConjugations;
  [Tenses.ConditionalPerfect]: SingleTenseConjugations;
  [Tenses.SubjunctivePresent]: SingleTenseConjugations;
  [Tenses.ImperativeAffirmativePresent]: SingleTenseConjugations;
  [Tenses.ImperativeNegativePresent]: SingleTenseConjugations;
};

export type ConjugationsMap = { string: Conjugation };
