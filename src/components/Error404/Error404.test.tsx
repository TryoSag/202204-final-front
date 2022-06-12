import { render, screen } from "@testing-library/react";
import Error404 from "./Error404";

describe("Given the Error404 component", () => {
  describe("When it's called", () => {
    test("Then it should render a text '404 not found'", () => {
      render(<Error404 />);

      expect(
        screen.getByText("404 not found", { exact: true })
      ).toBeInTheDocument();
    });
  });
});
