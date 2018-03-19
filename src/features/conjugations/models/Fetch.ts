export type Fetch = {
  fetching: boolean;
  fetched: boolean;
  error: boolean;
};

export const initialState = {
  fetching: false,
  fetched: false,
  error: false
};
