import { RootState } from "../../index";

export const selectTheme = (state: RootState) => state.ui.theme;
export const selectLanguage = (state: RootState) => state.ui.language;

export const selectLanguageData = (state: RootState) => state.ui.languageData;
export const selectIsLanguageLoading = (state: RootState) =>
  state.ui.languageLoading;
export const selectLanguageError = (state: RootState) => state.ui.languageError;
