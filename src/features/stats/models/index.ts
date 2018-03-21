export type VerbTenseStats = {
  timesSeen: number;
  timesCorrect: number;
  timesIncorrect: number;
  lastSeen: string;
};

export const initialState = {
  timesSeen: 0,
  timesCorrect: 0,
  timesIncorrect: 0,
  lastSeen: ''
};
