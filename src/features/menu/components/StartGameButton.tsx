import * as React from 'react';
import { Link } from 'react-router-dom';
import ArrowRight from 'material-ui/svg-icons/hardware/keyboard-arrow-right';
import RaisedButton from 'material-ui/RaisedButton';

import { Props } from '../containers/StartGameButton';
import CantStartModal from '../containers/CantStartModal';
import { pathToGame } from '../../../paths';

type State = {
  cantStartModalOpen: boolean;
};
export default class StartGameButton extends React.PureComponent<Props, State> {
  state = {
    cantStartModalOpen: false
  };
  handleClick = (e: React.MouseEvent<HTMLElement>): void => {
    const { canStartGame, startGame } = this.props;
    if (canStartGame) {
      startGame();
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
