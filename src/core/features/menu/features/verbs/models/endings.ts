export enum VerbEndingOptions {
  Ir = 'ir',
  Ar = 'ar',
  Er = 'er'
}

export type EndingsInPlay = {
  [VerbEndingOptions.Ar]: boolean;
  [VerbEndingOptions.Er]: boolean;
  [VerbEndingOptions.Ir]: boolean;
};

export const initialState: EndingsInPlay = {
  [VerbEndingOptions.Ar]: true,
  [VerbEndingOptions.Ir]: true,
  [VerbEndingOptions.Er]: true
};
