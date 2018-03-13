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
  indicativePresentProgressive: true,
  indicativeFuture: true,
  conditionalPresent: true,
  indicativeImperfect: true,
  indicativePreterite: true,
  indicativePresentPerfect: true,
  indicativeFuturePerfect: true,
  indicativePastPerfect: true,
  conditionalPerfect: true,
  subjunctivePresent: true,
  imperativeAffirmativePresent: true,
  imperativeNegativePresent: true
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
