import {
  getNumberOfTensesInPlay,
  getNoTensesInPlay
} from '../../menu/features/tenses/selectors';
import {
  getNumberOfPeopleInPlay,
  getNoPeopleInPlay
} from '../../menu/features/people/selectors';
import { StateProps as StartGameButtonStateProps } from '../containers/StartGameButton';
import { StateProps as CantStartModalStateProps } from '../containers/CantStartModal';

export const getStartButtonProps = (state: any): StartGameButtonStateProps => ({
  canStartGame:
    getNumberOfTensesInPlay(state) > 0 && getNumberOfPeopleInPlay(state) > 0
});

export const getCantStartModalProps = (
  state: any
): CantStartModalStateProps => {
  const missingItems = [];
  if (getNoTensesInPlay(state)) {
    missingItems.push('tenses');
  }
  if (getNoPeopleInPlay(state)) {
    missingItems.push('people');
  }
  return {
    missingItems
  };
};
