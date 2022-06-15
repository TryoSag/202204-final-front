import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store/store";
import LoginPage from "./LoginPage";
import TestRenderer from "react-test-renderer";

const mockNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

describe("Given the LoginPage page", () => {
  describe("When it's called", () => {
    test("Then it should render a heading with the text 'Login'", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <LoginPage />
          </Provider>
        </BrowserRouter>
      );

      expect(
        screen.getByRole("heading", { level: 1, name: "Login" })
      ).toBeInTheDocument();
    });

    test("Then it should render a label with 'Username'", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <LoginPage />
          </Provider>
        </BrowserRouter>
      );

      expect(screen.getByLabelText("Username")).toBeInTheDocument();
    });
  });

  describe("When it's called and there are a token on the local Storage", () => {
    test("Then it should call navigate", () => {
      Object.defineProperty(window, "localStorage", {
        value: { getItem: jest.fn(() => "token") },
      });

      render(
        <BrowserRouter>
          <Provider store={store}>
            <LoginPage />
          </Provider>
        </BrowserRouter>
      );
      expect(mockNavigate).toHaveBeenCalled();
    });

    test("Then it should match with the snapshot", () => {
      const loginPageSnapshot = TestRenderer.create(
        <BrowserRouter>
          <Provider store={store}>
            <LoginPage />
          </Provider>
        </BrowserRouter>
      );

      expect(loginPageSnapshot).toMatchSnapshot();
    });
  });
});
