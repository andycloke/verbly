import * as React from 'react';
import Toggle from 'material-ui/Toggle';
import Subheader from 'material-ui/Subheader';
import { List, ListItem } from 'material-ui/List';

type Props = {
  displayEnglishInfinitive: boolean;
  toggleEnglishInfinitive: (event: React.MouseEvent<HTMLElement>) => any;
  audioFeedback: boolean;
  toggleAudioFeedback: (event: React.MouseEvent<HTMLElement>) => any;
};

const OptionsMenu = ({
  displayEnglishInfinitive,
  toggleEnglishInfinitive,
  audioFeedback,
  toggleAudioFeedback
}: Props) => {
  return (
    <List>
      <Subheader>Options</Subheader>
      <ListItem
        primaryText="Display english infinitive"
        onClick={toggleEnglishInfinitive}
        rightIcon={<Toggle toggled={displayEnglishInfinitive} />}
      />
      <ListItem
        primaryText="Audio feedback"
        onClick={toggleAudioFeedback}
        rightIcon={<Toggle toggled={audioFeedback} />}
      />
    </List>
  );
};

export default OptionsMenu;
