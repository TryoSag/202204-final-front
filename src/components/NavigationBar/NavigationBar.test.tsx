import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store/store";
import NavigationBar from "./NavigationBar";

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
});
