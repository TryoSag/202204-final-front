import axios from "axios";
import { loginActionCreator } from "../features/userSlice";
import { loginThunk, registerThunk } from "./userThunks";

jest.mock("jwt-decode", () => () => ({
  username: "correctUsername",
  adminUser: false,
}));

describe("Given the loginThunk function", () => {
  describe("When it's called and receives a correct username and correct password", () => {
    test("Then it should call dispatch with loginActionCreator with the user username and adminUser", async () => {
      const userData = {
        username: "correctUsername",
        password: "correctPassword",
      };
      const dispatch = jest.fn();
      axios.post = jest
        .fn()
        .mockResolvedValue({ data: { token: "testToken" } });

      const expectedData = {
        username: "correctUsername",
        adminUser: false,
      };

      const expectedAction = loginActionCreator(expectedData);

      const thunk = loginThunk(userData);
      await thunk(dispatch);

      expect(dispatch).toHaveBeenCalledWith(expectedAction);
    });
  });
});

describe("Given the registerThunk function", () => {
  describe("When it's called and receives de new user data", () => {
    test("Then it should call dispatch with the loginThunk with the user data", async () => {
      const newUserData = {
        name: "testUser",
        username: "testUser",
        password: "testUser",
      };
      const dispatch = jest.fn();
      axios.post = jest
        .fn()
        .mockResolvedValue({ data: { username: "testUser" } });

      const thunk = registerThunk(newUserData);
      await thunk(dispatch);

      expect(dispatch).toHaveBeenCalled();
    });
  });
});
