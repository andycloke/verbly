import {
  enoughTensesToStartGame,
  getTensesDifficultyFactor
} from '../features/tenses/selectors';
import {
  enoughPeopleToStartGame,
  getPeopleDifficultyFactor
} from '../features/people/selectors';
import {
  enoughVerbsToStartGame,
  getVerbsDifficultyFactor
} from '../features/verbs/selectors';
import { StateProps as StartGameButtonStateProps } from '../containers/StartGameButton';
import { StateProps as CantStartModalStateProps } from '../containers/CantStartModal';

export const getCanStartGame = (state: any): boolean =>
  enoughTensesToStartGame(state) &&
  enoughPeopleToStartGame &&
  enoughVerbsToStartGame(state);

export const getStartButtonProps = (state: any): StartGameButtonStateProps => ({
  canStartGame: getCanStartGame(state)
});

export const getCantStartModalProps = (
  state: any
): CantStartModalStateProps => {
  const missingItems = [];
  if (!enoughTensesToStartGame(state)) {
    missingItems.push('tenses');
  }
  if (!enoughPeopleToStartGame(state)) {
    missingItems.push('people');
  }
  if (!enoughVerbsToStartGame(state)) {
    missingItems.push('verbs');
  }
  return {
    missingItems
  };
};

export const getDifficultyFactor = (state: any): number =>
  getTensesDifficultyFactor(state) *
  getPeopleDifficultyFactor(state) *
  getVerbsDifficultyFactor(state);
