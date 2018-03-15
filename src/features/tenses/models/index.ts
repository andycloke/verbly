export type TensesInPlay = {
  indicativePresent: boolean;
  indicativePreterite: boolean;
  indicativeFuture: boolean;
  conditionalPresent: boolean;
  indicativePresentProgressive: boolean;
  indicativeImperfect: boolean;
  indicativePresentPerfect: boolean;
  indicativeFuturePerfect: boolean;
  indicativePastPerfect: boolean;
  conditionalPerfect: boolean;
  subjunctivePresent: boolean;
  imperativeAffirmativePresent: boolean;
  imperativeNegativePresent: boolean;
};

export const initialState: TensesInPlay = {
  indicativePresent: true,
  indicativePresentProgressive: false,
  indicativeFuture: false,
  conditionalPresent: false,
  indicativeImperfect: false,
  indicativePreterite: false,
  indicativePresentPerfect: false,
  indicativeFuturePerfect: false,
  indicativePastPerfect: false,
  conditionalPerfect: false,
  subjunctivePresent: false,
  imperativeAffirmativePresent: false,
  imperativeNegativePresent: false
};

export const tenses = Object.freeze({
  indicativePresent: 'indicativePresent',
  indicativePresentProgressive: 'indicativePresentProgressive',
  indicativePreterite: 'indicativePreterite',
  indicativeFuture: 'indicativeFuture',
  conditionalPresent: 'conditionalPresent',
  indicativeImperfect: 'indicativeImperfect',
  indicativePresentPerfect: 'indicativePresentPerfect',
  indicativeFuturePerfect: 'indicativeFuturePerfect',
  indicativePastPerfect: 'indicativePastPerfect',
  conditionalPerfect: 'conditionalPerfect',
  subjunctivePresent: 'subjunctivePresent',
  imperativeAffirmativePresent: 'imperativeAffirmativePresent',
  imperativeNegativePresent: 'imperativeNegativePresent'
});
