import { usersActions, usersReducer } from "./state";

describe("When using state", () => {
  it("should return init state", () => {
    expect(usersReducer(undefined, {})).toEqual({
      users: [],
    });
  });

  it("should handle set users", () => {
    const previousState = { users: [] };
    const newStatePayload = [{ login: "user", repositories: [] }];
    expect(
      usersReducer(previousState, usersActions.setUsers(newStatePayload))
    ).toEqual({
      users: newStatePayload,
    });
  });
});
