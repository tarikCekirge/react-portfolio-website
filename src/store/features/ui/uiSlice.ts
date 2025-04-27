import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const THEME_STORAGE_KEY = "appTheme";
const LANGUAGE_STORAGE_KEY = "appLanguage";

const getInitialTheme = (): "light" | "dark" => {
  try {
    const storedTheme = localStorage.getItem(THEME_STORAGE_KEY);
    if (storedTheme === "light" || storedTheme === "dark") {
      return storedTheme;
    }
  } catch (error) {
    console.error("Error reading theme from localStorage:", error);
  }
  return "light";
};

const getInitialLanguage = (): string => {
  try {
    const storedLanguage = localStorage.getItem(LANGUAGE_STORAGE_KEY);

    if (storedLanguage) {
      return storedLanguage;
    }
  } catch (error) {
    console.error("Error reading language from localStorage:", error);
  }
  return "en";
};

export interface UiState {
  theme: "light" | "dark";
  language: string;
  languageData: Record<string, any> | null;
  languageLoading: boolean;
  languageError: string | null;
}

const initialState: UiState = {
  theme: getInitialTheme(),
  language: getInitialLanguage(),
  languageData: null,
  languageLoading: false,
  languageError: null,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<"light" | "dark">) => {
      state.theme = action.payload;
    },
    toggleTheme: (state) => {
      state.theme = state.theme === "light" ? "dark" : "light";
    },
    setLanguage: (state, action: PayloadAction<string>) => {
      if (state.language !== action.payload) {
        state.language = action.payload;
        state.languageData = null;
        state.languageError = null;
        state.languageLoading = true;
      } else {
        state.languageLoading = false;
      }
    },
    setLanguageDataSuccess: (
      state,
      action: PayloadAction<Record<string, any>>
    ) => {
      state.languageData = action.payload;
      state.languageLoading = false;
      state.languageError = null;
    },
    setLanguageDataFailure: (state, action: PayloadAction<string>) => {
      state.languageData = null;
      state.languageLoading = false;
      state.languageError = action.payload;
    },
  },
});

export const {
  setTheme,
  toggleTheme,
  setLanguage,
  setLanguageDataSuccess,
  setLanguageDataFailure,
} = uiSlice.actions;
export const uiReducer = uiSlice.reducer;

export { THEME_STORAGE_KEY, LANGUAGE_STORAGE_KEY };
