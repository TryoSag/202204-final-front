import { render, screen } from "@testing-library/react";
import LoginPage from "./LoginPage";

describe("Given the LoginPage page", () => {
  describe("When it's called", () => {
    test("Then it should render a heading with the text 'Login'", () => {
      render(<LoginPage />);

      expect(
        screen.getByRole("heading", { level: 1, name: "Login" })
      ).toBeInTheDocument();
    });

    test("Then it should render a label with Name", () => {
      render(<LoginPage />);

      expect(screen.getByLabelText("Name")).toBeInTheDocument();
    });
  });
});
