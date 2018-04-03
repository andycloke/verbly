import { actionTypes } from '../actions';
import { initialState, Game, VerbTense } from '../models';

export default (game: Game = initialState, action: any) => {
  switch (action.type) {
    case actionTypes.START_GAME:
      return {
        ...game,
        started: true,
        startTime: action.payload.startTime
      };
    case actionTypes.RESET_GAME:
      return initialState;
    case actionTypes.OPEN_REVIEW:
      return {
        ...game,
        reviewOpen: true,
        endTime: action.payload.endTime
      };
    case actionTypes.SET_GAME_UNSEEN_VERB_TENSES:
      return {
        ...game,
        unseenVerbTenses: action.payload.verbTenses
      };
    case actionTypes.REMOVE_UNSEEN_VERB_TENSE:
      return {
        ...game,
        unseenVerbTenses: game.unseenVerbTenses.filter(
          ({ verb, tense }: VerbTense): boolean =>
            verb !== action.payload.verb || tense !== action.payload.tense
        )
      };
    case actionTypes.ADD_MOST_RECENTLY_SEEN_VERB_TENSE:
      return {
        ...game,
        mostRecentlySeenVerbTenses: [
          ...game.mostRecentlySeenVerbTenses.filter(
            ({ verb, tense }: VerbTense) =>
              verb !== action.payload.verb || tense !== action.payload.tense
          ),
          {
            verb: action.payload.verb,
            tense: action.payload.tense
          }
        ]
      };
    case actionTypes.REMOVE_GAME_VERB_TENSE:
      return {
        ...game,
        unseenVerbTenses: game.unseenVerbTenses.filter(
          ({ verb, tense }: VerbTense): boolean =>
            verb !== action.payload.verb || tense !== action.payload.tense
        ),
        showAgainVerbTenses: game.showAgainVerbTenses.filter(
          ({ verb, tense }: VerbTense): boolean =>
            verb !== action.payload.verb || tense !== action.payload.tense
        )
      };
    case actionTypes.ADD_SHOW_AGAIN_VERB_TENSE:
      return {
        ...game,
        showAgainVerbTenses: [
          ...game.showAgainVerbTenses,
          {
            verb: action.payload.verb,
            tense: action.payload.tense
          }
        ]
      };
    case actionTypes.REMOVE_SHOW_AGAIN_VERB_TENSE:
      return {
        ...game,
        showAgainVerbTenses: game.showAgainVerbTenses.filter(
          (verbTense: VerbTense): boolean =>
            verbTense.verb !== action.payload.verb ||
            verbTense.tense !== action.payload.tense
        )
      };
    case actionTypes.NEW_QUESTION:
      return {
        ...game,
        currentQuestion: action.payload
      };
    case actionTypes.INCREMENT_QUESTIONS_ANSWERED:
      return {
        ...game,
        questionsAnswered: game.questionsAnswered + 1
      };
    case actionTypes.ADD_QUESTION_CORRECT:
      return {
        ...game,
        questionsCorrect: game.questionsCorrect + 1
      };
    case actionTypes.UPDATE_USER_ANSWER:
      return {
        ...game,
        userAnswer: action.payload.userAnswer
      };
    case actionTypes.CLEAR_USER_ANSWER:
      return {
        ...game,
        userAnswer: ''
      };
    case actionTypes.SHOW_CONJUGATIONS:
      return {
        ...game,
        displayConjugations: true
      };
    case actionTypes.HIDE_CONJUGATIONS:
      return {
        ...game,
        displayConjugations: false
      };
    default:
      return game;
  }
};
