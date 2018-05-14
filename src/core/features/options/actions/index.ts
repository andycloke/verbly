export const actionTypes = {
  TOGGLE_ENGLISH_INFINITIVE: 'options/TOGGLE_ENGLISH_INFINITIVE',
  TOGGLE_AUDIO_FEEDBACK: 'options/TOGGLE_AUDIO_FEEDBACK'
};

export const toggleEnglishInfinitive = () => ({
  type: actionTypes.TOGGLE_ENGLISH_INFINITIVE
});

export const toggleAudioFeedback = () => ({
  type: actionTypes.TOGGLE_AUDIO_FEEDBACK
});
