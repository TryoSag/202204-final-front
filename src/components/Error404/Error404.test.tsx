import { render, screen } from "@testing-library/react";
import Error404 from "./Error404";

describe("Given the Error404 component", () => {
  describe("When it's called", () => {
    test("Then it should render a text 'Error 404'", () => {
      render(<Error404 />);

      expect(
        screen.getByText("Error 404", { exact: true })
      ).toBeInTheDocument();
    });
  });
});
