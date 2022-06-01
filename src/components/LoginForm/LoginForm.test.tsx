import { render, screen } from "@testing-library/react";
import LoginForm from "./LoginForm";

describe("Given the LoginForm component", () => {
  describe("When it's called", () => {
    test("Then it should render 1 label with text Username", () => {
      render(<LoginForm />);

      expect(screen.getByLabelText("Username")).toBeInTheDocument();
    });

    test("Then it should render 1 label with text Password", () => {
      render(<LoginForm />);

      expect(screen.getByLabelText("Password")).toBeInTheDocument();
    });

    test("Then it should render 1 button with text 'Login'", () => {
      render(<LoginForm />);

      expect(screen.getByRole("button", { name: "Login" })).toBeInTheDocument();
    });

    test("Then it should render 1 button with text 'to register'", () => {
      render(<LoginForm />);

      expect(
        screen.getByRole("button", { name: "to register" })
      ).toBeInTheDocument();
    });
  });
});
