import * as React from 'react';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';
import Subheader from 'material-ui/Subheader';
import TextField from 'material-ui/TextField';
import { List } from 'material-ui/List';

import {
  VerbsIncludedOptions,
  WhichVerbsOptions,
  VerbsInPlay
} from '../models';

export type VerbsMenuActionProps = {
  setReflexiveVerbsInPlay: (option: string) => any;
  setIrregularVerbsInPlay: (option: string) => any;
  setWhichVerbsInPlay: (option: string) => any;
  updateUserDefinedVerbs: (verbs: Array<string>) => any;
};

type Props = VerbsInPlay & VerbsMenuActionProps;

const VerbsMenu = ({
  reflexive,
  irregular,
  whichVerbs,
  userDefinedVerbs,
  setReflexiveVerbsInPlay,
  setIrregularVerbsInPlay,
  setWhichVerbsInPlay,
  updateUserDefinedVerbs
}: Props) => {
  const handleReflexiveVerbsChange = (
    event: React.FormEvent<{}>,
    option: string
  ): void => setReflexiveVerbsInPlay(option);

  const handleIrregulerVerbsChange = (
    event: React.FormEvent<{}>,
    option: string
  ): void => setIrregularVerbsInPlay(option);

  const handleWhichVerbsChange = (
    event: React.FormEvent<{}>,
    option: string
  ): void => setWhichVerbsInPlay(option);

  const handleChange = (event: React.FormEvent<{}>, value: string): void => {
    updateUserDefinedVerbs(
      value.split(',').map(verb => verb.trim().toLowerCase())
    );
  };

  const setWhichVerbsInPlayToUserDefined: React.FocusEventHandler<{}> = () =>
    setWhichVerbsInPlay(WhichVerbsOptions.UserDefined);

  return (
    <List>
      <Subheader>Verbs</Subheader>
      <Subheader>Reflexive</Subheader>
      <RadioButtonGroup
        name="reflexive"
        onChange={handleReflexiveVerbsChange}
        valueSelected={reflexive}
      >
        <RadioButton value={VerbsIncludedOptions.Include} label="Include" />
        <RadioButton value={VerbsIncludedOptions.Exclude} label="Exclude" />
        <RadioButton value={VerbsIncludedOptions.Only} label="Only " />
      </RadioButtonGroup>
      <Subheader>Irregular</Subheader>
      <RadioButtonGroup
        name="irregular"
        onChange={handleIrregulerVerbsChange}
        valueSelected={irregular}
      >
        <RadioButton value={VerbsIncludedOptions.Include} label="Include" />
        <RadioButton value={VerbsIncludedOptions.Exclude} label="Exclude" />
        <RadioButton value={VerbsIncludedOptions.Only} label="Only " />
      </RadioButtonGroup>
      <Subheader>Which Verbs</Subheader>
      <RadioButtonGroup
        name="whichVerbs"
        onChange={handleWhichVerbsChange}
        valueSelected={whichVerbs}
      >
        <RadioButton value={WhichVerbsOptions.All} label="All" />
        <RadioButton value={WhichVerbsOptions.Common} label="Common" />
        <RadioButton value={WhichVerbsOptions.UserDefined} label="Choose: " />
      </RadioButtonGroup>
      <TextField
        value={userDefinedVerbs.join(',')}
        onChange={handleChange}
        onFocus={setWhichVerbsInPlayToUserDefined}
      />
    </List>
  );
};

export default VerbsMenu;
