import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../redux/store/store";
import LoginForm from "./LoginForm";

describe("Given the LoginForm component", () => {
  describe("When it's called", () => {
    test("Then it should render 1 label with text Username", () => {
      render(
        <Provider store={store}>
          <LoginForm />
        </Provider>
      );

      expect(screen.getByLabelText("Username")).toBeInTheDocument();
    });

    test("Then it should render 1 label with text Password", () => {
      render(
        <Provider store={store}>
          <LoginForm />
        </Provider>
      );

      expect(screen.getByLabelText("Password")).toBeInTheDocument();
    });

    test("Then it should render 1 button with text 'Login'", () => {
      render(
        <Provider store={store}>
          <LoginForm />
        </Provider>
      );

      expect(screen.getByRole("button", { name: "Login" })).toBeInTheDocument();
    });

    test("Then it should render 1 button with text 'to register'", () => {
      render(
        <Provider store={store}>
          <LoginForm />
        </Provider>
      );

      expect(
        screen.getByRole("button", { name: "to register" })
      ).toBeInTheDocument();
    });
  });
});
