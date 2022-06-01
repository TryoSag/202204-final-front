import { render, screen } from "@testing-library/react";
import RegisterPage from "./RegisterPage";

describe("Given the RegisterPage page", () => {
  describe("When it's called", () => {
    test("Then it should render a heading with the text 'Register'", () => {
      render(<RegisterPage />);

      expect(
        screen.getByRole("heading", { level: 1, name: "Register" })
      ).toBeInTheDocument();
    });

    test("Then it should render a label with 'Name'", () => {
      render(<RegisterPage />);

      expect(screen.getByLabelText("Name")).toBeInTheDocument();
    });
  });
});
