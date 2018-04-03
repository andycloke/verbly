// Game UI as well as short term game data

export type VerbTense = {
  verb: string;
  tense: string;
};

export type CurrentQuestion = {
  person: string;
  displayPerson: string;
  verb: string;
  tense: string;
};

export type Game = {
  started: boolean;
  startTime: string;
  endTime: string;
  reviewOpen: boolean;
  unseenVerbTenses: Array<VerbTense>; // unseen (as far as this game is concerned)
  showAgainVerbTenses: Array<VerbTense>; // need reviewing again in this game
  mostRecentlySeenVerbTenses: Array<VerbTense>;
  questionsAnswered: number;
  questionsCorrect: number;
  currentQuestion: CurrentQuestion;
  userAnswer: string;
  displayConjugations: boolean;
};

export const initialState = {
  started: false,
  startTime: '',
  endTime: '',
  reviewOpen: false,
  unseenVerbTenses: [],
  mostRecentlySeenVerbTenses: [],
  showAgainVerbTenses: [],
  questionsAnswered: 0,
  questionsCorrect: 0,
  currentQuestion: {
    person: '',
    displayPerson: '',
    verb: '',
    tense: ''
  },
  userAnswer: '',
  displayConjugations: false
};
