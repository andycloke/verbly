export enum VerbEndingOptions {
  Ir = 'Ir',
  Ar = 'Ar',
  Er = 'Er'
}

export type EndingsInPlay = {
  [VerbEndingOptions.Ar]: boolean;
  [VerbEndingOptions.Ir]: boolean;
  [VerbEndingOptions.Er]: boolean;
};

export const initialState: EndingsInPlay = {
  [VerbEndingOptions.Ar]: true,
  [VerbEndingOptions.Ir]: true,
  [VerbEndingOptions.Er]: true
};
