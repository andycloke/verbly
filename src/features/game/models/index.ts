export type Game = {
  started: boolean;
  verbs: Array<string>;
};

export const initialState = {
  started: false,
  verbs: []
};
