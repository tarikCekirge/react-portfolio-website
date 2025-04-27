import { configureStore } from "@reduxjs/toolkit";

import { uiReducer, UiState } from "./features/ui/uiSlice";

export type RootState = {
  ui: UiState;
};

import {
  localStorageMiddleware,
  syncInitialUiSettings,
} from "./localStorageMiddleware";

export const store = configureStore({
  reducer: {
    ui: uiReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(localStorageMiddleware),
});

syncInitialUiSettings(store.getState().ui);

export type AppDispatch = typeof store.dispatch;
