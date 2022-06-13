import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store/store";
import ErrorPage from "./ErrorPage";

describe("Given the ErrorPage component", () => {
  describe("When it's called", () => {
    test("Then it should render a heading with 'Error'", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <ErrorPage />
          </Provider>
        </BrowserRouter>
      );

      expect(
        screen.getByRole("heading", { level: 1, name: "Error" })
      ).toBeInTheDocument();
    });
  });
});
