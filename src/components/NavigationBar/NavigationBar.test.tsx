import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store/store";
import NavigationBar from "./NavigationBar";

const mockNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

describe("Given the NavigationBar component", () => {
  describe("When it's called", () => {
    test("Then it should render 2 images, one with alternative text 'home icon' and 'logout icon'", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <NavigationBar />
          </Provider>
        </BrowserRouter>
      );

      expect(screen.getByAltText("home icon")).toBeInTheDocument();
      expect(screen.getByAltText("logout icon")).toBeInTheDocument();
    });
  });

  describe("When it's called and clicked on image with alternative text 'home icon'", () => {
    test("Then it should call navigate", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <NavigationBar />
          </Provider>
        </BrowserRouter>
      );

      const buttonHomeIcon = screen.getByAltText("home icon");

      userEvent.click(buttonHomeIcon);

      expect(mockNavigate).toHaveBeenCalled();
    });
  });

  describe("When it's called and clicked on image with alternative text 'logout icon'", () => {
    test("Then it should call navigate", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <NavigationBar />
          </Provider>
        </BrowserRouter>
      );

      const buttonLogoutIcon = screen.getByAltText("logout icon");

      userEvent.click(buttonLogoutIcon);

      expect(mockNavigate).toHaveBeenCalled();
    });
  });
});
