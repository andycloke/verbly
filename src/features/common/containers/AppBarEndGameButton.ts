import { connectEndGameButton } from '../../game/containers/EndGameButton';
import AppBarEndGameButtonComp from '../components/AppBarEndGameButton';

const AppBarEndGameButton = connectEndGameButton(
  AppBarEndGameButtonComp as any
);
export default AppBarEndGameButton;
