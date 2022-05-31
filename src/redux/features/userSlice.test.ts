import userReducer, {
  loginActionCreator,
  logoutActionCreator,
} from "./userSlice";

describe("Given the loginActionCreator action", () => {
  describe("When it's called and receives a username 'testUser' and admin true", () => {
    test("Then it should return same data plus logged true", () => {
      const testUser = {
        username: "testUser",
        adminUser: true,
        logged: false,
      };
      const expectedUser = {
        username: "testUser",
        adminUser: true,
        logged: true,
      };

      const action = loginActionCreator(testUser);
      const loggedUser = userReducer(testUser, action);

      expect(loggedUser).toEqual(expectedUser);
    });
  });
});

describe("Given the logoutActionCreator action", () => {
  describe("When it's called", () => {
    test("Then it should set username '', admin false and logged false", () => {
      const testUser = {
        username: "testUser",
        adminUser: false,
        logged: true,
      };
      const expectedUser = {
        username: "",
        adminUser: false,
        logged: false,
      };

      const action = logoutActionCreator();
      const loggedUser = userReducer(testUser, action);

      expect(loggedUser).toEqual(expectedUser);
    });
  });
});
