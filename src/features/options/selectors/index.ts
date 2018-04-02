import { Options } from '../models';

const getOptionsSlice = (state: any): Options => state.options;

export const getDisplayEnglishInfinitive = (state: any): boolean =>
  getOptionsSlice(state).displayEnglishInfinitive;

export const getAudioFeedback = (state: any): boolean =>
  getOptionsSlice(state).audioFeedback;

export const getOptionModalOpen = (state: any): boolean =>
  getOptionsSlice(state).optionsModalOpen;

export const getOptionsMenuProps = (state: any) => ({
  displayEnglishInfinitive: getDisplayEnglishInfinitive(state),
  audioFeedback: getAudioFeedback(state)
});
