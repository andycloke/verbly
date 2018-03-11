import * as React from 'react';
import Toggle from 'material-ui/Toggle';

import './OptionsMenu.css';

type Props = {
  displayEnglishInfinitive: boolean;
  toggleEnglishInfinitive: (event: React.MouseEvent<HTMLElement>) => any;
};

const OptionsMenu = ({
  displayEnglishInfinitive,
  toggleEnglishInfinitive
}: Props) => {
  return (
    <div className="OptionsMenu__outer">
      <h1 className="OptionsMenu__header">Options</h1>
      <Toggle
        label="Toggle english infinitive"
        toggled={displayEnglishInfinitive}
        onToggle={toggleEnglishInfinitive}
      />
    </div>
  );
};

export default OptionsMenu;
