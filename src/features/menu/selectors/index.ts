import {
  enoughTensesToStartGame,
  getTensesDifficultyFactor,
  getOnlyImperativeTensesInPlay
} from '../features/tenses/selectors';
import {
  enoughPeopleToStartGame,
  getPeopleDifficultyFactor,
  getOnlyYoInPlay
} from '../features/people/selectors';
import {
  enoughVerbsToStartGame,
  getVerbsDifficultyFactor
} from '../features/verbs/selectors';
import { StateProps as StartGameButtonStateProps } from '../containers/StartGameButton';
import { StateProps as CantStartModalStateProps } from '../containers/CantStartModal';

export const getOlyYoAndImperativeTenses = (state: any): boolean =>
  getOnlyYoInPlay(state) && getOnlyImperativeTensesInPlay(state);

export const getCanStartGame = (state: any): boolean =>
  !getOlyYoAndImperativeTenses(state) &&
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
  if (!enoughTensesToStartGame(state) || getOlyYoAndImperativeTenses(state)) {
    missingItems.push('tenses');
  }
  if (!enoughPeopleToStartGame(state) || getOlyYoAndImperativeTenses(state)) {
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
  Math.round(
    getTensesDifficultyFactor(state) *
      getPeopleDifficultyFactor(state) *
      getVerbsDifficultyFactor(state) *
      100
  ) / 100;
