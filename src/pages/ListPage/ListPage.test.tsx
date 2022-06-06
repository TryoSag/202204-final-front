import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store/store";
import ListPage from "./ListPage";

describe("Given the ListPage component", () => {
  describe("When it's called", () => {
    test("Then it should render a heading with 'List of Pet's'", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <ListPage />
          </Provider>
        </BrowserRouter>
      );

      expect(
        screen.getByRole("heading", { level: 1, name: "List of Pet's" })
      ).toBeInTheDocument();
    });
  });
});
