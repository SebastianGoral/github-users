import ky from "ky";
import { IUser } from "../_State/Users/model";

export const githubApi = ky.create({
  prefixUrl: "https://api.github.com/",
  headers: {
    "content-type": "application/json",
  },
});

interface IUsersResponse {
  items: IUser[];
}

export const getUsers = (q: string): Promise<IUsersResponse> =>
  githubApi
    .get("search/users", {
      searchParams: { q, per_page: 5 },
    })
    .json()
    .then((value) => {
      const mappedItems = (value as IUsersResponse).items.map(({ login }) => ({
        login,
      }));
      return { items: mappedItems } as IUsersResponse;
    });

interface IRepositoryResponse {
  stargazers_count: number;
  description: string;
  full_name: string;
  html_url: string;
}

export const getRepositoriesForUser = (
  user: string
): Promise<IRepositoryResponse[]> =>
  githubApi
    .get(`users/${user}/repos`)
    .json()
    .then((value) =>
      (value as IRepositoryResponse[]).map(
        ({
          stargazers_count,
          description,
          full_name,
          html_url,
        }: IRepositoryResponse) => ({
          stargazers_count,
          description,
          full_name,
          html_url,
        })
      )
    );
