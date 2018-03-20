type SingleTenseConjugations = {
  yo: Array<string>;
  tu: Array<string>;
  el: Array<string>;
  ns: Array<string>;
  vs: Array<string>;
  ellos: Array<string>;
};

export type Conjugation = {
  spanishInfinitive: string;
  englishInfinitive: string;
  irregular: boolean;
  type: string;
  common: boolean;
  reflexive: boolean;
  indicativePresent: SingleTenseConjugations;
  indicativePreterite: SingleTenseConjugations;
  indicativeFuture: SingleTenseConjugations;
  conditionalPresent: SingleTenseConjugations;
  indicativeImperfect: SingleTenseConjugations;
  indicativePresentProgressive: SingleTenseConjugations;
  indicativePresentPerfect: SingleTenseConjugations;
  indicativePastPerfect: SingleTenseConjugations;
  indicativeFuturePerfect: SingleTenseConjugations;
  conditionalPerfect: SingleTenseConjugations;
  subjunctivePresent: SingleTenseConjugations;
  imperativeAffirmativePresent: SingleTenseConjugations;
  imperativeNegativePresent: SingleTenseConjugations;
};

export type ConjugationsState = {
  conjugations: object;
  // TODO: conjugations: object<string, Conjugation>;
};

export const initialState = {
  conjugations: {}
};
