import * as React from 'react';
import Toggle from 'material-ui/Toggle';
import Subheader from 'material-ui/Subheader';
import { List, ListItem } from 'material-ui/List';

import { StateProps, DispatchProps } from '../containers/OptionsMenu';

const OptionsMenu = ({
  displayEnglishInfinitive,
  toggleEnglishInfinitive,
  audioFeedback,
  toggleAudioFeedback
}: StateProps & DispatchProps) => {
  const handleEnglishInfinitiveClick = (
    event: React.MouseEvent<HTMLElement>
  ): void => toggleEnglishInfinitive();
  const handleAudioFeedbackClick = (
    event: React.MouseEvent<HTMLElement>
  ): void => toggleAudioFeedback();
  return (
    <List>
      <Subheader>Options</Subheader>
      <ListItem
        primaryText="Display english infinitive"
        onClick={handleEnglishInfinitiveClick}
        rightIcon={<Toggle toggled={displayEnglishInfinitive} />}
        innerDivStyle={{ lineHeight: 1.3 }}
      />
      <ListItem
        primaryText="Audio feedback"
        onClick={handleAudioFeedbackClick}
        rightIcon={<Toggle toggled={audioFeedback} />}
      />
    </List>
  );
};

export default OptionsMenu;
