import * as React from 'react';
import Subheader from 'material-ui/Subheader';
import TextField from 'material-ui/TextField';
import { List } from 'material-ui/List';

import ListRadioButton from '../../../features/common/components/ListRadioButton';

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
      <ListRadioButton
        primaryText="Include"
        value={VerbsIncludedOptions.Include}
        onClick={setReflexiveVerbsInPlay}
        checked={reflexive === VerbsIncludedOptions.Include}
      />
      <ListRadioButton
        primaryText="Exclude"
        value={VerbsIncludedOptions.Exclude}
        onClick={setReflexiveVerbsInPlay}
        checked={reflexive === VerbsIncludedOptions.Exclude}
      />
      <ListRadioButton
        primaryText="Only"
        value={VerbsIncludedOptions.Only}
        onClick={setReflexiveVerbsInPlay}
        checked={reflexive === VerbsIncludedOptions.Only}
      />
      <Subheader>Irregular</Subheader>
      <ListRadioButton
        value={VerbsIncludedOptions.Include}
        primaryText="Include"
        onClick={setIrregularVerbsInPlay}
        checked={irregular === VerbsIncludedOptions.Include}
      />
      <ListRadioButton
        value={VerbsIncludedOptions.Exclude}
        primaryText="Exclude"
        onClick={setIrregularVerbsInPlay}
        checked={irregular === VerbsIncludedOptions.Exclude}
      />
      <ListRadioButton
        value={VerbsIncludedOptions.Only}
        primaryText="Only"
        onClick={setIrregularVerbsInPlay}
        checked={irregular === VerbsIncludedOptions.Only}
      />
      <Subheader>Which Verbs</Subheader>
      <ListRadioButton
        value={WhichVerbsOptions.All}
        primaryText="All"
        onClick={setWhichVerbsInPlay}
        checked={whichVerbs === WhichVerbsOptions.All}
      />
      <ListRadioButton
        value={WhichVerbsOptions.Common}
        primaryText="Common"
        onClick={setWhichVerbsInPlay}
        checked={whichVerbs === WhichVerbsOptions.Common}
      />
      <ListRadioButton
        value={WhichVerbsOptions.UserDefined}
        primaryText={
          <TextField
            id="ChooseWhichVerbs"
            floatingLabelText="Choose"
            value={userDefinedVerbs.join(',')}
            onChange={handleChange}
            onFocus={setWhichVerbsInPlayToUserDefined}
          />
        }
        onClick={setWhichVerbsInPlay}
        checked={whichVerbs === WhichVerbsOptions.UserDefined}
      />
    </List>
  );
};

export default VerbsMenu;
