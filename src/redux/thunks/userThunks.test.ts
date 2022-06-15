import axios from "axios";
import { toast } from "react-toastify";
import { loginActionCreator } from "../features/userSlice";
import { loginThunk, registerThunk } from "./userThunks";

jest.mock("jwt-decode", () => () => ({
  username: "correctUsername",
  adminUser: false,
  eMail: "testEMail",
}));

describe("Given the registerThunk function", () => {
  describe("When it's called and receives de new user data", () => {
    test("Then it should call dispatch with the loginThunk with the user data", async () => {
      const newUserData = {
        name: "testUser",
        username: "testUser",
        password: "testUser",
        eMail: "testEMail",
      };
      const dispatch = jest.fn();
      const response = { status: 201, data: { username: "testUser" } };
      axios.post = jest.fn().mockResolvedValue(response);

      const thunk = registerThunk(newUserData);
      await thunk(dispatch);

      expect(dispatch).toHaveBeenCalled();
    });
  });

  describe("When it's called and there are a problem with data base", () => {
    test("Then it should don't call dispatch", async () => {
      const newUserData = {
        name: "testUser",
        username: "testUser",
        password: "testUser",
        eMail: "testEMail",
      };
      const dispatch = jest.fn();
      const response = { status: 404 };
      axios.post = jest.fn().mockResolvedValue(response);

      const thunk = registerThunk(newUserData);
      await thunk(dispatch);

      expect(dispatch).not.toHaveBeenCalled();
    });
  });

  describe("When it's called and there are a problem on the API", () => {
    test("Then it should call toast.error with 'Error on register'", async () => {
      const newUserData = {
        name: "testUser",
        username: "testUser",
        password: "testUser",
        eMail: "testEMail",
      };
      const dispatch = jest.fn();
      axios.post = jest.fn().mockRejectedValue(null);
      toast.error = jest.fn();

      const thunk = registerThunk(newUserData);
      await thunk(dispatch);

      expect(toast.error).toHaveBeenCalledWith("Error on register");
    });
  });
});

describe("Given the loginThunk function", () => {
  describe("When it's called and receives a correct username and correct password", () => {
    test("Then it should call dispatch with loginActionCreator with the user username and adminUser", async () => {
      const userData = {
        username: "correctUsername",
        password: "correctPassword",
      };
      const dispatch = jest.fn();
      const response = { status: 200, data: { token: "testToken" } };
      axios.post = jest.fn().mockResolvedValue(response);

      const expectedData = {
        username: "correctUsername",
        adminUser: false,
        eMail: "testEMail",
      };

      const expectedAction = loginActionCreator(expectedData);

      const thunk = loginThunk(userData);
      await thunk(dispatch);

      expect(dispatch).toHaveBeenCalledWith(expectedAction);
    });
  });

  describe("When it's called and there are a problem with data base", () => {
    test("Then it should don't call dispatch", async () => {
      const userData = {
        username: "correctUsername",
        password: "correctPassword",
      };
      const dispatch = jest.fn();
      const response = { status: 404, data: { token: null } };
      axios.post = jest.fn().mockResolvedValue(response);

      const thunk = loginThunk(userData);
      await thunk(dispatch);

      expect(dispatch).not.toHaveBeenCalled();
    });
  });

  describe("When it's called and there are a problem on the API", () => {
    test("Then it should call toast.error with 'Error on login'", async () => {
      const userData = {
        username: "correctUsername",
        password: "correctPassword",
      };
      const dispatch = jest.fn();
      toast.error = jest.fn();
      axios.post = jest.fn().mockRejectedValue(null);

      const thunk = loginThunk(userData);
      await thunk(dispatch);

      expect(toast.error).toHaveBeenCalledWith("Error on login");
    });
  });
});
