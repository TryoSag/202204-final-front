import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import store from "../../redux/store/store";
import ListPets from "./ListPets";

describe("Given the ListPets component", () => {
  describe("When it's called", () => {
    test("Then it should render a list of 3 buttons with images inside with the alternative text 'All icon', 'Cats icon' and 'Dogs icon'", () => {
      render(
        <Provider store={store}>
          <ListPets token={"testToken"} />
        </Provider>
      );

      expect(screen.getByAltText("All icon")).toBeInTheDocument();
      expect(screen.getByAltText("Cats icon")).toBeInTheDocument();
      expect(screen.getByAltText("Dogs icon")).toBeInTheDocument();
    });

    test("Then it should render 2 images with the alternative text 'previous page' and 'next page'", () => {
      render(
        <Provider store={store}>
          <ListPets token={"testToken"} />
        </Provider>
      );

      expect(screen.getByAltText("previous page")).toBeInTheDocument();
      expect(screen.getByAltText("next page")).toBeInTheDocument();
    });
  });

  describe("When it's called and receives a click on filter button", () => {
    test("Then it should call mockSetState", () => {
      const mockSetState = jest.fn();
      const mockState = jest
        .fn()
        .mockReturnValue([["dog", "cat"], mockSetState]);
      jest.mock("react", () => ({
        ...jest.requireActual("react"),
        useState: () => mockState,
      }));

      render(
        <Provider store={store}>
          <ListPets token={"testToken"} />
        </Provider>
      );

      const filterButton = screen.getByAltText("All icon");
      userEvent.click(filterButton);

      expect(mockSetState).toHaveBeenCalled();
    });
  });
});
