import { initialState as endingsInitialState, EndingsInPlay } from './endings';

export enum VerbsIncludedOptions {
  Include = 'Include',
  Exclude = 'Exclude',
  Only = 'Only'
}

export enum WhichVerbsOptions {
  All = 'All',
  Common = 'Common',
  UserDefined = 'UserDefined'
}

export type VerbsInPlay = {
  reflexive: VerbsIncludedOptions;
  irregular: VerbsIncludedOptions;
  whichVerbs: WhichVerbsOptions;
  userDefinedVerbs: Array<string>;
  endings: EndingsInPlay;
};

export const initialState: VerbsInPlay = {
  reflexive: VerbsIncludedOptions.Include,
  irregular: VerbsIncludedOptions.Include,
  whichVerbs: WhichVerbsOptions.Common,
  userDefinedVerbs: [],
  endings: endingsInitialState
};
