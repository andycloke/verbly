import * as React from 'react';
import Toggle from 'material-ui/Toggle';
import { List, ListItem } from 'material-ui/List';

import { Props } from '../../../core/features/options/containers/OptionsMenu';

const toggleStyle = { right: 15 };

const OptionsMenu = ({
  displayEnglishInfinitive,
  toggleEnglishInfinitive,
  audioFeedback,
  toggleAudioFeedback
}: Props) => {
  const handleEnglishInfinitiveClick = (
    event: React.MouseEvent<HTMLElement>
  ): void => toggleEnglishInfinitive();
  const handleAudioFeedbackClick = (
    event: React.MouseEvent<HTMLElement>
  ): void => toggleAudioFeedback();
  return (
    <List>
      <ListItem
        primaryText="Display english infinitive"
        onClick={handleEnglishInfinitiveClick}
        rightIcon={
          <Toggle style={toggleStyle} toggled={displayEnglishInfinitive} />
        }
        innerDivStyle={{ lineHeight: 1.3 }}
      />
      <ListItem
        primaryText="Audio feedback"
        onClick={handleAudioFeedbackClick}
        rightIcon={<Toggle style={toggleStyle} toggled={audioFeedback} />}
      />
    </List>
  );
};

export default OptionsMenu;
