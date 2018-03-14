export const verbsIncludedOptions = {
  include: 'Include',
  exclude: 'Exclude',
  only: 'Only'
};

export enum VerbsIncludedOptions {
  Include = 'Include',
  Exclude = 'Exclude',
  Only = 'Only'
}

// export type VerbsIncludedOptions = 'Include' | 'Exclude' | 'Only';

export enum WhichVerbsOptions {
  All = 'All',
  Common = 'Common',
  UserDefined = 'UserDefined'
}

// export type WhichVerbsOptions = 'All' | 'Common' | 'User Defined';

export type VerbsInPlay = {
  reflexive: VerbsIncludedOptions;
  irregular: VerbsIncludedOptions;
  whichVerbs: WhichVerbsOptions;
  userDefinedVerbs: Array<string>;
};

export const initialState: VerbsInPlay = {
  reflexive: VerbsIncludedOptions.Include,
  irregular: VerbsIncludedOptions.Include,
  whichVerbs: WhichVerbsOptions.Common,
  userDefinedVerbs: []
};
