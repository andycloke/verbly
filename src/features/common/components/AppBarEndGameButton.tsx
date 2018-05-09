import * as React from 'react';
import { Link, Route, withRouter, RouteComponentProps } from 'react-router-dom';

import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';

import { pathToHome } from '../../../paths';
import { pathToGame } from '../../../paths';

export type Props = {
  resetGame: () => void;
};

class AppBarEndGameButton extends React.PureComponent<
  Props & RouteComponentProps<any>
> {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }
  handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      this.props.history.push(pathToHome());
      this.props.resetGame();
    }
  };

  handleClick = (e: React.MouseEvent<HTMLElement>): void => {
    this.props.resetGame();
  };

  render() {
    return (
      <Route
        exact
        path={pathToGame()}
        render={() => (
          <div className="AppBarEndGameButton__outer">
            <Link to={pathToHome()}>
              <IconButton onClick={this.handleClick}>
                <NavigationClose color="white" />
              </IconButton>
            </Link>
          </div>
        )}
      />
    );
  }
}

export default withRouter(AppBarEndGameButton);
