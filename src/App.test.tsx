import { configureStore, createSlice } from "@reduxjs/toolkit";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { listOfPets } from "./mocks/mockPets";
import { testAdmin } from "./mocks/mockUsers";

const mockDispatch = jest.fn();
jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockDispatch,
}));

jest.mock("jwt-decode", () => () => ({
  username: "correctUsername",
  adminUser: false,
  eMail: "testEMail",
}));

describe("Given the App", () => {
  describe("When it's called and receives a adminUser true and there are token on localStorage", () => {
    test("Then it should call dispatch", () => {
      const userMockSlice = createSlice({
        name: "user",
        initialState: testAdmin,
        reducers: {},
      });
      const petsMockSlice = createSlice({
        name: "pets",
        initialState: listOfPets,
        reducers: {},
      });
      const mockStore = configureStore({
        reducer: { pets: petsMockSlice.reducer, user: userMockSlice.reducer },
      });
      Object.defineProperty(window, "localStorage", {
        value: { getItem: jest.fn(() => "token") },
      });

      render(
        <BrowserRouter>
          <Provider store={mockStore}>
            <App />
          </Provider>
        </BrowserRouter>
      );

      expect(mockDispatch).toHaveBeenCalled();
    });
  });

  describe("When it's called and receives a adminUser true and there are not token on localStorage", () => {
    test("Then it should not call dispatch", () => {
      const userMockSlice = createSlice({
        name: "user",
        initialState: testAdmin,
        reducers: {},
      });
      const petsMockSlice = createSlice({
        name: "pets",
        initialState: listOfPets,
        reducers: {},
      });
      const mockStore = configureStore({
        reducer: { pets: petsMockSlice.reducer, user: userMockSlice.reducer },
      });
      Object.defineProperty(window, "localStorage", {
        value: { getItem: jest.fn(() => null) },
      });

      render(
        <BrowserRouter>
          <Provider store={mockStore}>
            <App />
          </Provider>
        </BrowserRouter>
      );

      expect(mockDispatch).not.toHaveBeenCalled();
    });
  });
});
