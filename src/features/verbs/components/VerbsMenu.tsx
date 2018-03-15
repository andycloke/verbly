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

import './VerbsMenu.css';

export type VerbsMenuActionProps = {
  setReflexiveVerbsInPlay: (option: string) => any;
  setIrregularVerbsInPlay: (option: string) => any;
  setWhichVerbsInPlay: (option: string) => any;
  updateUserDefinedVerbs: (verbs: Array<string>) => any;
};

type Props = VerbsInPlay & VerbsMenuActionProps;

type State = {
  whichVerbsInputValue: string;
};

export default class VerbsMenu extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      whichVerbsInputValue: props.userDefinedVerbs.join(', ')
    };
  }

  handleChange = (event: React.FormEvent<{}>, value: string): void => {
    this.setState({ whichVerbsInputValue: value });
    this.props.updateUserDefinedVerbs(
      value.split(',').map(verb => verb.trim().toLowerCase())
    );
  };

  setWhichVerbsInPlayToUserDefined: React.FocusEventHandler<{}> = () =>
    this.props.setWhichVerbsInPlay(WhichVerbsOptions.UserDefined);

  render() {
    const {
      reflexive,
      irregular,
      whichVerbs,
      setReflexiveVerbsInPlay,
      setIrregularVerbsInPlay,
      setWhichVerbsInPlay
    } = this.props;

    return (
      <div className="VerbsMenu__outer">
        {/* <Subheader>Verbs</Subheader> */}
        <List>
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
        </List>
        <List>
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
        </List>
        <List>
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
                floatingLabelFixed
                value={this.state.whichVerbsInputValue}
                hintText="Estar, pagar"
                onChange={this.handleChange}
                onFocus={this.setWhichVerbsInPlayToUserDefined}
              />
            }
            onClick={setWhichVerbsInPlay}
            checked={whichVerbs === WhichVerbsOptions.UserDefined}
          />
        </List>
      </div>
    );
  }
}
