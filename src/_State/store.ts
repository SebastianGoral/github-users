import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { usersReducer } from "./Users/state";

const rootReducer = combineReducers({
  usersSlice: usersReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
