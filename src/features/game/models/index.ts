// Game UI as well as short term game data

export type VerbTense = {
  spanishInfinitive: string;
  tense: string;
};

export type CurrentQuestion = {
  person: string;
  displayPerson: string;
  spanishInfinitive: string;
  tense: string;
};

export type Game = {
  started: boolean;
  unseenVerbs: Array<string>; // unseen (as far as this game is concerned)
  showAgainVerbTenses: Array<VerbTense>; // need reviewing again in this game
  mostRecentlySeenVerbs: Array<string>;
  questionsAnswered: number;
  questionsCorrect: number;
  currentQuestion: CurrentQuestion;
  userAnswer: string;
  displayConjugations: boolean;
};

export const initialState = {
  started: false,
  unseenVerbs: [],
  mostRecentlySeenVerbs: [],
  showAgainVerbTenses: [],
  questionsAnswered: 0,
  questionsCorrect: 0,
  currentQuestion: {
    person: '',
    displayPerson: '',
    spanishInfinitive: '',
    tense: ''
  },
  userAnswer: '',
  displayConjugations: false
};
