import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../redux/store/store";
import RegisterForm from "./RegisterForm";

describe("Given the RegisterForm component", () => {
  describe("When it's called", () => {
    test("Then it should render 1 label with text Name", () => {
      render(
        <Provider store={store}>
          <RegisterForm />
        </Provider>
      );

      expect(screen.getByLabelText("Name")).toBeInTheDocument();
    });

    test("Then it should render 1 label with text Username", () => {
      render(
        <Provider store={store}>
          <RegisterForm />
        </Provider>
      );

      expect(screen.getByLabelText("Username")).toBeInTheDocument();
    });

    test("Then it should render 1 label with text Password", () => {
      render(
        <Provider store={store}>
          <RegisterForm />
        </Provider>
      );

      expect(screen.getByLabelText("Password")).toBeInTheDocument();
    });

    test("Then it should render 1 button with text 'Register'", () => {
      render(
        <Provider store={store}>
          <RegisterForm />
        </Provider>
      );

      expect(
        screen.getByRole("button", { name: "Register" })
      ).toBeInTheDocument();
    });

    test("Then it should render 1 button with text 'to Login'", () => {
      render(
        <Provider store={store}>
          <RegisterForm />
        </Provider>
      );

      expect(
        screen.getByRole("button", { name: "to Login" })
      ).toBeInTheDocument();
    });
  });
});
