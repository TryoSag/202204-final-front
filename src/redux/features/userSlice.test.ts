import userReducer, { loginActionCreator } from "./userSlice";

describe("Given the loginActionCreator action", () => {
  describe("When it's called and receives a username 'testUser', admin true and eMail 'testEmail'", () => {
    test("Then it should return same data", () => {
      const initialUserState = {
        username: "",
        adminUser: false,
        eMail: "",
      };
      const testUser = {
        username: "testUser",
        adminUser: true,
        eMail: "testEmail",
      };

      const action = loginActionCreator(testUser);
      const loggedUser = userReducer(initialUserState, action);

      expect(loggedUser).toEqual(testUser);
    });
  });
});
