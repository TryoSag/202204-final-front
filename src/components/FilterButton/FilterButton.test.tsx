import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import FilterButton from "./FilterButton";

describe("Given the FilterButton component", () => {
  describe("When it's called and receives text 'test'", () => {
    test("Then it should render a image with alternative text 'test icon'", () => {
      render(<FilterButton text="test" image="" list={[]} action={() => {}} />);

      expect(screen.getByAltText("test icon")).toBeInTheDocument();
    });
  });

  describe("When it's called and it's clicked", () => {
    test("Then it should call the received action", () => {
      const actionReceived = jest.fn();
      const listReceived = ["test"];

      render(
        <FilterButton
          text="test"
          image=""
          list={listReceived}
          action={actionReceived}
        />
      );

      const imageToClick = screen.getByAltText("test icon");

      userEvent.click(imageToClick);

      expect(actionReceived).toHaveBeenCalled();
    });
  });
});
