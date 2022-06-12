import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store/store";
import RegisterPage from "./RegisterPage";

const mockNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

describe("Given the RegisterPage page", () => {
  describe("When it's called", () => {
    test("Then it should render a heading with the text 'Register'", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <RegisterPage />
          </Provider>
        </BrowserRouter>
      );

      expect(
        screen.getByRole("heading", { level: 1, name: "Register" })
      ).toBeInTheDocument();
    });

    test("Then it should render a label with 'Name'", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <RegisterPage />
          </Provider>
        </BrowserRouter>
      );

      expect(screen.getByLabelText("Name")).toBeInTheDocument();
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
            <RegisterPage />
          </Provider>
        </BrowserRouter>
      );
      expect(mockNavigate).toHaveBeenCalled();
    });
  });
});
