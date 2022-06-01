import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../redux/store/store";
import LoginPage from "./LoginPage";

describe("Given the LoginPage page", () => {
  describe("When it's called", () => {
    test("Then it should render a heading with the text 'Login'", () => {
      render(
        <Provider store={store}>
          <LoginPage />
        </Provider>
      );

      expect(
        screen.getByRole("heading", { level: 1, name: "Login" })
      ).toBeInTheDocument();
    });

    test("Then it should render a label with 'Username'", () => {
      render(
        <Provider store={store}>
          <LoginPage />
        </Provider>
      );

      expect(screen.getByLabelText("Username")).toBeInTheDocument();
    });
  });
});
