import * as React from 'react';
import Toggle from 'material-ui/Toggle';

import './OptionsMenu.css';

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
    <div className="OptionsMenu__outer">
      <h1 className="OptionsMenu__header">Options</h1>
      <Toggle
        label="Display english infinitive"
        toggled={displayEnglishInfinitive}
        onToggle={toggleEnglishInfinitive}
      />
      <Toggle
        label="Audio feedback"
        toggled={audioFeedback}
        onToggle={toggleAudioFeedback}
      />
    </div>
  );
};

export default OptionsMenu;
