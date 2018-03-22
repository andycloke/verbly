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
  showAgainVerbs: Array<VerbTense>; // need reviewing again in this game
  questionsAnswered: number;
  currentQuestion: CurrentQuestion;
  userAnswer: string;
};

export const initialState = {
  started: false,
  unseenVerbs: [],
  showAgainVerbs: [],
  questionsAnswered: 0,
  currentQuestion: {
    person: '',
    displayPerson: '',
    spanishInfinitive: '',
    tense: ''
  },
  userAnswer: ''
};
