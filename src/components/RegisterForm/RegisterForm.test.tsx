import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store/store";
import RegisterForm from "./RegisterForm";

describe("Given the RegisterForm component", () => {
  describe("When it's called", () => {
    test("Then it should render 1 label with text Name", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <RegisterForm />
          </Provider>
        </BrowserRouter>
      );

      expect(screen.getByLabelText("Name")).toBeInTheDocument();
    });

    test("Then it should render 1 label with text Username", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <RegisterForm />
          </Provider>
        </BrowserRouter>
      );

      expect(screen.getByLabelText("Username")).toBeInTheDocument();
    });

    test("Then it should render 1 label with text Password", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <RegisterForm />
          </Provider>
        </BrowserRouter>
      );

      expect(screen.getByLabelText("Password")).toBeInTheDocument();
    });

    test("Then it should render 1 button with text 'Register'", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <RegisterForm />
          </Provider>
        </BrowserRouter>
      );

      expect(
        screen.getByRole("button", { name: "Register" })
      ).toBeInTheDocument();
    });

    test("Then it should render 1 link with text 'Login'", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <RegisterForm />
          </Provider>
        </BrowserRouter>
      );

      expect(screen.getByRole("link", { name: "Login" })).toBeInTheDocument();
    });
  });
});
