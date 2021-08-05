import { CaseReducer, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IStateWithUsers, IUser, IUsersState } from "./model";

const initialState: IUsersState = {
  users: [],
};

const setUsers: CaseReducer<IUsersState, PayloadAction<IUser[]>> = (
  state,
  { payload }
) => {
  state.users = payload;
};

const setUserRepositories: CaseReducer<IUsersState, PayloadAction<IUser>> = (
  state,
  { payload }
) => {
  const userToUpdate = state.users.find((user) => user.login === payload.login);
  if (userToUpdate) {
    userToUpdate.repositories = payload.repositories;
  }
};

const usersSlice = createSlice({
  name: "usersSlice",
  initialState,
  reducers: {
    setUsers,
    setUserRepositories,
  },
});

export const usersSelector = (state: IStateWithUsers) => state.usersSlice;

export const usersReducer = usersSlice.reducer;
export const usersActions = usersSlice.actions;
