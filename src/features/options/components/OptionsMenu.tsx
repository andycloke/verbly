import * as React from 'react';

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
      <p>{`${displayEnglishInfinitive}`}</p>
      <button onClick={toggleEnglishInfinitive}>
        Toggle english infinitive
      </button>
    </div>
  );
};

export default OptionsMenu;
