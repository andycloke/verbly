import { Tenses } from '../models/tenses';

const DisplayText = {
  [Tenses.IndicativePresent]: {
    text: 'Present',
    example: 'Yo hablo'
  },
  [Tenses.IndicativePresentProgressive]: {
    text: 'Present Progressive',
    example: 'Yo estoy hablando'
  },
  [Tenses.IndicativeFuture]: {
    text: 'Future',
    example: 'Yo hablaré'
  },
  [Tenses.ConditionalPresent]: {
    text: 'Conditional',
    example: 'Yo hablaría'
  },
  [Tenses.IndicativeImperfect]: {
    text: 'Imperfect',
    example: 'Yo hablaba'
  },
  [Tenses.IndicativePreterite]: {
    text: 'Preterite',
    example: 'Yo hablé'
  },
  [Tenses.IndicativePresentPerfect]: {
    text: 'Present Perfect',
    example: 'Yo he hablado'
  },
  [Tenses.IndicativeFuturePerfect]: {
    text: 'Future Perfect',
    example: 'Yo habré hablado'
  },
  [Tenses.IndicativePastPerfect]: {
    text: 'Past Perfect',
    example: 'Yo había hablado'
  },
  [Tenses.ConditionalPerfect]: {
    text: 'Conditional Perfect',
    example: 'Yo habría hablado'
  },
  [Tenses.SubjunctivePresent]: {
    text: 'Subjunctive',
    example: 'Yo hable'
  },
  [Tenses.ImperativeAffirmativePresent]: {
    text: 'Imperative (Affirmative)',
    example: 'Habla!'
  },
  [Tenses.ImperativeNegativePresent]: {
    text: 'Imperative (Negative)',
    example: 'No hables!'
  }
};

export default DisplayText;
