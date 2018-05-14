import * as React from 'react';
import { Link, withRouter, RouteComponentProps } from 'react-router-dom';
import ArrowRight from 'material-ui/svg-icons/hardware/keyboard-arrow-right';
import RaisedButton from 'material-ui/RaisedButton';

import { Props } from '../../../core/features/menu/containers/StartGameButton';
import CantStartModal from '../containers/CantStartModal';
import { pathToGame } from '../../../paths';

type State = {
  cantStartModalOpen: boolean;
};
class StartGameButton extends React.PureComponent<
  Props & RouteComponentProps<any>,
  State
> {
  state = {
    cantStartModalOpen: false
  };
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }
  handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Enter') {
      this.startGameOrOpenCantStartModal(true);
    }
  };

  handleClick = (e: React.MouseEvent<HTMLElement>): void => {
    this.startGameOrOpenCantStartModal();
  };

  startGameOrOpenCantStartModal = (redirect: boolean = false) => {
    const { canStartGame, startGame } = this.props;
    if (canStartGame) {
      startGame();
      if (redirect) {
        this.props.history.push(pathToGame());
      }
    } else {
      this.openCantStartModal();
    }
  };

  openCantStartModal = () => this.setState({ cantStartModalOpen: true });
  closeCantStartModal = () => this.setState({ cantStartModalOpen: false });
  render() {
    const { canStartGame } = this.props;
    const Button = () => (
      <RaisedButton
        onClick={this.handleClick}
        secondary
        label="Play"
        labelPosition="before"
        icon={<ArrowRight />}
      />
    );
    if (canStartGame) {
      return (
        <Link to={pathToGame()}>
          <Button />
        </Link>
      );
    }
    return (
      <>
        <Button />
        <CantStartModal
          open={this.state.cantStartModalOpen}
          closeModal={this.closeCantStartModal}
        />
      </>
    );
  }
}

export default withRouter(StartGameButton as any);
