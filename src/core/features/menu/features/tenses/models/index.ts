import { Tenses } from '../../../../../constants/tenses';

export type TensesInPlay = {
  [Tenses.IndicativePresent]: boolean;
  [Tenses.IndicativePresentProgressive]: boolean;
  [Tenses.IndicativeFuture]: boolean;
  [Tenses.ConditionalPresent]: boolean;
  [Tenses.IndicativePreterite]: boolean;
  [Tenses.IndicativeImperfect]: boolean;
  [Tenses.IndicativePresentPerfect]: boolean;
  [Tenses.IndicativeFuturePerfect]: boolean;
  [Tenses.IndicativePastPerfect]: boolean;
  [Tenses.ConditionalPerfect]: boolean;
  [Tenses.SubjunctivePresent]: boolean;
  [Tenses.ImperativeAffirmativePresent]: boolean;
  [Tenses.ImperativeNegativePresent]: boolean;
};

export const initialState: TensesInPlay = {
  [Tenses.IndicativePresent]: true,
  [Tenses.IndicativePresentProgressive]: true,
  [Tenses.IndicativeFuture]: false,
  [Tenses.ConditionalPresent]: false,
  [Tenses.IndicativePreterite]: false,
  [Tenses.IndicativeImperfect]: false,
  [Tenses.IndicativePresentPerfect]: false,
  [Tenses.IndicativeFuturePerfect]: false,
  [Tenses.IndicativePastPerfect]: false,
  [Tenses.ConditionalPerfect]: false,
  [Tenses.SubjunctivePresent]: false,
  [Tenses.ImperativeAffirmativePresent]: false,
  [Tenses.ImperativeNegativePresent]: false
};
