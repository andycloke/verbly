const getOptionsSlice = (state: any) => state.options;

const getDisplayEnglishInfinitive = (state: any): boolean =>
  getOptionsSlice(state).displayEnglishInfinitive;

export const getOptionsMenuProps = (state: any) => ({
  displayEnglishInfinitive: getDisplayEnglishInfinitive(state)
});
