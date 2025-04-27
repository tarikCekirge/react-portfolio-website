import { Middleware } from "@reduxjs/toolkit";
import { RootState } from "./index";
import {
  setTheme,
  setLanguage,
  toggleTheme,
  setLanguageDataSuccess,
  setLanguageDataFailure,
  THEME_STORAGE_KEY,
  LANGUAGE_STORAGE_KEY,
  UiState,
} from "./features/ui";
import axios from "axios";
import { api } from "@/services/api";

export const localStorageMiddleware: Middleware<{}, RootState> =
  (storeAPI) => (next) => async (action) => {
    const result = next(action);

    if (setTheme.match(action) || toggleTheme.match(action)) {
      try {
        const newTheme = storeAPI.getState().ui.theme;
        localStorage.setItem(THEME_STORAGE_KEY, newTheme);

        if (newTheme === "dark") {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
        }
      } catch (error) {
        console.error("Middleware Theme Error:", error);
      }
    } else if (setLanguage.match(action)) {
      let newLanguage: string | null = null;
      try {
        newLanguage = storeAPI.getState().ui.language;

        localStorage.setItem(LANGUAGE_STORAGE_KEY, newLanguage);

        document.documentElement.lang = newLanguage;

        const filePath = `/locales/${newLanguage}.json`;

        try {
          const response = await api.get<Record<string, any>>(filePath);
          console.log(response.data);
          if (response.data) {
            console.log(
              `Middleware: Fetch successful for ${newLanguage}. Dispatching success action.`
            );
            storeAPI.dispatch(setLanguageDataSuccess(response.data));
          } else {
            throw new Error("Fetched data is empty or invalid");
          }
        } catch (fetchError) {
          const errorMessage = axios.isAxiosError(fetchError)
            ? `API Error fetching ${filePath} (${
                fetchError.response?.status || "Network Error"
              }): ${fetchError.message}`
            : fetchError instanceof Error
            ? fetchError.message
            : "Unknown fetch error";
          storeAPI.dispatch(setLanguageDataFailure(errorMessage));
        }
      } catch (error) {
        console.error("Middleware Language Outer Error:", error);
        if (newLanguage) {
          storeAPI.dispatch(
            setLanguageDataFailure(
              error instanceof Error
                ? error.message
                : "Unknown middleware error before fetch"
            )
          );
        }
      }
    }

    return result;
  };

export const syncInitialUiSettings = (initialUiState: UiState): void => {
  try {
    console.log("Syncing initial UI settings to DOM:", initialUiState);
    if (initialUiState.theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    document.documentElement.lang = initialUiState.language;
    console.log(
      `Initial Sync: Theme=${initialUiState.theme}, Lang=${initialUiState.language} applied to DOM.`
    );
  } catch (error) {
    console.error("Initial Sync DOM Error:", error);
  }
};
