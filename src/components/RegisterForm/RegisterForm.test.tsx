import { render, screen } from "@testing-library/react";
import RegisterForm from "./RegisterForm";

describe("Given the RegisterForm component", () => {
  describe("When it's called", () => {
    test("Then it should render 1 label with text Name", () => {
      render(<RegisterForm />);

      expect(screen.getByLabelText("Name")).toBeInTheDocument();
    });

    test("Then it should render 1 label with text Username", () => {
      render(<RegisterForm />);

      expect(screen.getByLabelText("Username")).toBeInTheDocument();
    });

    test("Then it should render 1 label with text Password", () => {
      render(<RegisterForm />);

      expect(screen.getByLabelText("Password")).toBeInTheDocument();
    });

    test("Then it should render 1 button with text 'Register'", () => {
      render(<RegisterForm />);

      expect(
        screen.getByRole("button", { name: "Register" })
      ).toBeInTheDocument();
    });

    test("Then it should render 1 button with text 'to Login'", () => {
      render(<RegisterForm />);

      expect(
        screen.getByRole("button", { name: "to Login" })
      ).toBeInTheDocument();
    });
  });
});
