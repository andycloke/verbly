import {
  moreThanOneTenseInPlay,
  getTensesDifficultyFactor,
  getOnlyImperativeTensesInPlay,
  getSomeImperativeTensesInPlay
} from '../features/tenses/selectors';
import {
  moreThanOnePersonInPlay,
  getPeopleDifficultyFactor,
  getOnlyYoInPlay
} from '../features/people/selectors';
import {
  moreThanOneVerbInPlay,
  getVerbsDifficultyFactor
} from '../features/verbs/selectors';
import { StateProps as StartGameButtonStateProps } from '../containers/StartGameButton';
import { StateProps as CantStartModalStateProps } from '../containers/CantStartModal';

export const getOnlyYoAndOnlyImperativeTensesInPlay = (state: any): boolean =>
  getOnlyYoInPlay(state) && getOnlyImperativeTensesInPlay(state);

export const getOnlyYoAndSomeImperativeTensesInPlay = (state: any): boolean =>
  getOnlyYoInPlay(state) && getSomeImperativeTensesInPlay(state);

export const getCanStartGame = (state: any): boolean =>
  !getOnlyYoAndSomeImperativeTensesInPlay(state) &&
  !getOnlyYoAndOnlyImperativeTensesInPlay(state) &&
  moreThanOneTenseInPlay(state) &&
  moreThanOnePersonInPlay(state) &&
  moreThanOneVerbInPlay(state);

export const getStartButtonProps = (state: any): StartGameButtonStateProps => ({
  canStartGame: getCanStartGame(state)
});

export const userNeedsToAddMoreTenses = (state: any): boolean =>
  !moreThanOneTenseInPlay(state) ||
  getOnlyYoAndOnlyImperativeTensesInPlay(state);

export const userNeedsToAddMorePeople = (state: any): boolean =>
  !moreThanOnePersonInPlay(state) ||
  getOnlyYoAndSomeImperativeTensesInPlay(state) ||
  getOnlyYoAndOnlyImperativeTensesInPlay(state);

export const userNeedsToAddMoreVerbs = (state: any): boolean =>
  !moreThanOneVerbInPlay(state);

export const getCantStartModalProps = (
  state: any
): CantStartModalStateProps => {
  const missingItems = [];
  if (userNeedsToAddMoreTenses(state)) {
    missingItems.push('tenses');
  }
  if (userNeedsToAddMorePeople(state)) {
    missingItems.push('people');
  }
  if (userNeedsToAddMoreVerbs(state)) {
    missingItems.push('verbs');
  }
  return {
    missingItems
  };
};

export const getDifficultyMultiplier = (state: any): number =>
  Math.round(
    getTensesDifficultyFactor(state) *
      getPeopleDifficultyFactor(state) *
      getVerbsDifficultyFactor(state) *
      100
  ) / 100;
