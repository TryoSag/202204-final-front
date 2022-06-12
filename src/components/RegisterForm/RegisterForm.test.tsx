import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store/store";
import RegisterForm from "./RegisterForm";

describe("Given the RegisterForm component", () => {
  describe("When it's called", () => {
    test("Then it should render 1 label with text 'Name'", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <RegisterForm />
          </Provider>
        </BrowserRouter>
      );

      expect(screen.getByLabelText("Name")).toBeInTheDocument();
    });

    test("Then it should render 1 label with text 'Username'", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <RegisterForm />
          </Provider>
        </BrowserRouter>
      );

      expect(screen.getByLabelText("Username")).toBeInTheDocument();
    });

    test("Then it should render 1 label with text 'Email'", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <RegisterForm />
          </Provider>
        </BrowserRouter>
      );

      expect(screen.getByLabelText("Email")).toBeInTheDocument();
    });

    test("Then it should render 1 label with text 'Password'", () => {
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

  describe("When it's called and clicked 'Register' button", () => {
    test("Then it should reset the value on the inputs", () => {
      const testText = "test";

      render(
        <BrowserRouter>
          <Provider store={store}>
            <RegisterForm />
          </Provider>
        </BrowserRouter>
      );

      const nameInput = screen.getByLabelText("Name");
      const usernameInput = screen.getByLabelText("Username");
      const eMailInput = screen.getByLabelText("Email");
      const passwordInput = screen.getByLabelText("Password");
      const submitButton = screen.getByRole("button", { name: "Register" });

      userEvent.type(nameInput, testText);
      userEvent.type(usernameInput, testText);
      userEvent.type(eMailInput, testText);
      userEvent.type(passwordInput, testText);
      userEvent.click(submitButton);

      expect(nameInput).toHaveValue("");
      expect(usernameInput).toHaveValue("");
      expect(eMailInput).toHaveValue("");
      expect(passwordInput).toHaveValue("");
    });
  });
});
