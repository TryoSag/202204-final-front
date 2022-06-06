import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store/store";
import NavigationBar from "./NavigationBar";

describe("Given the NavigationBar component", () => {
  describe("When it's called", () => {
    test("Then it should render 2 buttons", () => {
      const expectedNumberOfButtons = 2;

      render(
        <BrowserRouter>
          <Provider store={store}>
            <NavigationBar />
          </Provider>
        </BrowserRouter>
      );

      expect(screen.getAllByRole("button")).toHaveLength(
        expectedNumberOfButtons
      );
    });
  });
});
