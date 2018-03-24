export const actionTypes = {
  TOGGLE_ENGLISH_INFINITIVE: 'options/TOGGLE_ENGLISH_INFINITIVE',
  TOGGLE_AUDIO_FEEDBACK: 'options/TOGGLE_AUDIO_FEEDBACK',
  TOGGLE_OPTIONS_MENU_OPEN: 'options/TOGGLE_OPTIONS_MENU_OPEN'
};

export const toggleEnglishInfinitive = () => ({
  type: actionTypes.TOGGLE_ENGLISH_INFINITIVE
});

export const toggleAudioFeedback = () => ({
  type: actionTypes.TOGGLE_AUDIO_FEEDBACK
});

export const toggleOptionsMenuOpen = () => ({
  type: actionTypes.TOGGLE_OPTIONS_MENU_OPEN
});
