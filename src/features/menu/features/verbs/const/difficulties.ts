import { VerbsIncludedOptions, WhichVerbsOptions } from '../models';

export const IRREGULAR_DIFFICULTIES = {
  [VerbsIncludedOptions.Include]: 0.7,
  [VerbsIncludedOptions.Exclude]: 0.5,
  [VerbsIncludedOptions.Only]: 1
};

export const REFLEXIVE_DIFFICULTIES = {
  [VerbsIncludedOptions.Include]: 0.5,
  [VerbsIncludedOptions.Exclude]: 0.4,
  [VerbsIncludedOptions.Only]: 0.5
};

export const WHICH_VERBS_DIFFICULTIES = {
  [WhichVerbsOptions.All]: 1,
  [WhichVerbsOptions.Common]: 0.8,
  [WhichVerbsOptions.UserDefined]: 0.2
};
