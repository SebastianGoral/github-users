import { Dispatch } from "@reduxjs/toolkit";
import { getRepositoriesForUser, getUsers } from "../../_Api/api";
import { usersActions } from "./state";

export const loadUsers = (q: string) => async (dispatch: Dispatch) => {
  try {
    const response = await getUsers(q);
    dispatch(usersActions.setUsers(response.items));
  } catch (e) {
    console.error("Error occured");
  }
};

export const loadUserRepositories =
  (user: string) => async (dispatch: Dispatch) => {
    try {
      const repositories = await getRepositoriesForUser(user);
      const mappedRepositories = repositories.map(
        ({ stargazers_count, description, full_name, html_url }) => {
          const fullName = full_name.split("/");
          const title = fullName.slice(1, fullName.length).join();
          return {
            stars: stargazers_count,
            description,
            title,
            url: html_url,
          };
        }
      );
      dispatch(
        usersActions.setUserRepositories({
          login: user,
          repositories: mappedRepositories,
        })
      );
    } catch (e) {
      console.error("Error occured");
    }
  };
