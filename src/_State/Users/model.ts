export interface IRepository {
  title: string;
  description: string;
  stars: number;
  url: string;
}

export interface IUser {
  login: string;
  repositories: IRepository[];
}

export interface IUsersState {
  users: IUser[];
}

export interface IStateWithUsers {
  usersSlice: IUsersState;
}
