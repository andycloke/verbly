import * as React from 'react';
import { Link } from 'react-router-dom';
import { Route } from 'react-router-dom';

import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';

import { pathToHome } from '../../../paths';
import { pathToGame } from '../../../paths';

export type Props = {
  endGame: () => void;
};

const AppBarEndGameButton = ({ endGame }: Props) => {
  const handleClick = (e: React.MouseEvent<HTMLElement>): void => endGame();
  return (
    <Route
      exact
      path={pathToGame()}
      render={() => (
        <div className="AppBarEndGameButton__outer">
          <Link to={pathToHome()}>
            <IconButton onClick={handleClick}>
              <NavigationClose color="white" />
            </IconButton>
          </Link>
        </div>
      )}
    />
  );
};

export default AppBarEndGameButton;
